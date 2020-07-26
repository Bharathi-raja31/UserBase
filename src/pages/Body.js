import * as React from 'react';

// Bootstrap
import { Container, Row, Jumbotron, Tabs, Tab, Form, Pagination } from 'react-bootstrap';

// Components
import Loader from '../components/Loader';
import UserList from '../components/UserList';
import UserProfile from '../components/UserProfile';

// API Services
import { getUserList } from '../utils/Api';

// Email Validation
function isEmail(emailField) {
  // eslint-disable-next-line
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  return (reg.test(emailField));
}

const Home = () => {

  let pageList = [];

  // Pagination
  const renderPagination = (activePage, totalPages) => {
    for (let number = 1; number <= totalPages; number++) {
      pageList.push(
        <Pagination.Item key={number} active={number === activePage}>
          {number}
        </Pagination.Item>,
      );
    }
    return pageList;
  }

  // Callback function for profile edit
  const userProfileOnChange = (type, value) => {
    setState({ [type]: value });
  }

  // Handling state variables
  const [state, setState] = React.useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      isLoading: true, isShowProfile: false, data: [], totalPages: 0, total: 0, page: null, key: "listTab", firstName: '', lastName: '', phone: '', email: '',
      avatar: "", address: '', city: '', nationState: '', zip: '', isChecked: false
    }
  )

  // Get user list from api after page load
  React.useEffect(() => {
    getUserData(1)
  }, []);


  //Api call to fetch data
  const getUserData = (page) => {
    getUserList(page).then(response => {
      setState({ isLoading: false, ...response })
    })
  }

  // Show detailed tab On Click
  const viewUserInfo = (selectedData) => {
    setState({ key: "detailTab", firstName: selectedData.first_name, lastName: selectedData.last_name, email: selectedData.email, avatar: selectedData.avatar, isShowProfile: true })
  }

  // Profile update on submit and show console log / alert
  const profileOnsubmit = (formData) => {
    const { firstName, lastName, phone, email, avatar, address, city, nationState, zip, isChecked } = formData;
    if (firstName && lastName && phone && email && avatar && address && city && nationState && zip && isChecked && phone.length === 10 && zip.length === 6 && isEmail(email)) {
      console.log(formData, "Form updated successfully");
    } else {
      alert("All fields are mandatory/ Phone must be 10 digits/ Zip must be 6 digit");
    }
    return
  }

  const { isLoading, data, total_pages, total, page, firstName, lastName, avatar, email, address, city, nationState, zip, isChecked, key, isShowProfile, phone } = state;

  // Show Loader on page load
  if (isLoading) {
    return <Loader />
  }

  return (
    <div className="home">
      <Jumbotron>
        <Container>
          <h1>User Base</h1>
          <p>
            {total} Active users found
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <div className="home-content">
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setState({ key: k })}>
            <Tab eventKey="listTab" title="List">
              <UserList data={data} onClickCallBack={viewUserInfo} />
              <Pagination onClick={(e) => {
                const page = e.target.text
                if (page) {
                  getUserData(page);
                }
              }} >
                {renderPagination(page, total_pages)}
              </Pagination>
            </Tab>
            <Tab eventKey="detailTab" title="Profile">
              {
                isShowProfile ?
                  <Form>
                    <Row>
                      <UserProfile data={{
                        firstName, lastName, avatar, email, address, city, nationState, zip, isChecked, phone
                      }} profileOnsubmitCallBack={profileOnsubmit} userProfileOnChange={userProfileOnChange} />
                    </Row>
                  </Form>
                  :
                  <p>No users Selected</p>
              }
            </Tab>
          </Tabs>
        </div>
      </Container>
    </div>
  )
};

export default Home;
