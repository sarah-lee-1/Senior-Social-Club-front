import React, { useState } from 'react';

const [id, setId] = useState('');

const ViewSingleProfile = (props) => {

    function handleSubmit(event) {
        event.preventDefault();
        let searchMember = {
            id: id
        }
            console.log(searchMember);
            props.searchForMember(searchMember.Id);
    }

    return (
        <table className='table'>
            <thead>
            <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Active Status</th>
                <th>Balance</th>
            </tr>
            </thead>

            <tbody>
                {props.parentEntries.map((member, index) => {
                    return (
                        <tr>
                            <td>{member.id}</td>
                            <td>{member.first_name}</td>
                            <td>{member.middle_name}</td>
                            <td>{member.last_name}</td>
                            <td>{member.email}</td>
                            <td>{member.address}</td>
                            <td>{member.city}</td>
                            <td>{member.state}</td>
                            <td>{member.zip_code}</td>
                            <td>{member.is_active}</td>
                            <td>{member.balance}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table> 
    )

}

export default ViewSingleProfile