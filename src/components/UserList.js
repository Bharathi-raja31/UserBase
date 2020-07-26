import * as React from 'react';
import PropTypes from 'prop-types';

import { Table } from 'react-bootstrap';

const UserList = ({ onClickCallBack, data }) => {
    return (
        <Table hover responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Avatar</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((row, key) =>
                        <tr id={row.id} key={`user-${key}`} onClick={() => onClickCallBack(row)}>
                            <td>{row.id}</td>
                            <td>{row.first_name}</td>
                            <td>{row.last_name}</td>
                            <td>{row.email}</td>
                            <td><img src={row.avatar} alt={row.first_name} /></td>
                        </tr>
                    )
                }
            </tbody>
        </Table>
    )
}

UserList.propTypes = {
    onClickCallBack: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            first_name: PropTypes.string.isRequired,
            last_name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            avatar: PropTypes.string.isRequired
        })
    ),
};

export default UserList;