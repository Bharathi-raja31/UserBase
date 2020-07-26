import * as React from 'react';
import PropTypes from 'prop-types';

import { Row, Col, Form, Button } from 'react-bootstrap';

const UserProfile = ({ profileOnsubmitCallBack, data, userProfileOnChange }) => {

    const { firstName, lastName, phone, email, avatar, address, city, nationState, zip, isChecked } = data;

    return (
        <>
            <Col sm={8}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={firstName} onChange={(e) => userProfileOnChange("firstName", e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" value={lastName} onChange={(e) => userProfileOnChange("lastName", e.target.value)} />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" value={phone} onChange={(e) => userProfileOnChange("phone", e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={(e) => userProfileOnChange("email", e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address} onChange={(e) => userProfileOnChange("address", e.target.value)} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control value={city} onChange={(e) => userProfileOnChange("city", e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue={nationState} onChange={(e) => userProfileOnChange("nationState", e.target.value)}>
                            <option>Select State</option>
                            <option>Tamilnadu</option>
                            <option>Kerala</option>
                            <option>Delhi</option>
                            <option>Karnataka</option>
                            <option>Pune</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control type="number" value={zip} onChange={(e) => userProfileOnChange("zip", e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Group id="formGridCheckbox">
                    <Form.Check type="checkbox" checked={isChecked} label="By Click this, You're agreeing to offer me a job &#128540;" onChange={(e) => userProfileOnChange("isChecked", !isChecked)} />
                </Form.Group>
            </Col>
            <Col sm={4}>
                <label>Avatar</label>
                <div className="avatar-col">
                    <img src={avatar} alt={firstName} />
                </div>
            </Col>
            <Row>
                <Col className="form-update">
                    <Button variant="primary" onClick={() => profileOnsubmitCallBack(data)}>
                        Save
                    </Button>
                </Col>
            </Row>
        </>
    )
}

UserProfile.propTypes = {
    profileOnsubmitCallBack: PropTypes.func.isRequired,
    userProfileOnChange: PropTypes.func.isRequired,
    data: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired
    }).isRequired
};

export default UserProfile;