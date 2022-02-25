import React, { useState, Fragment } from 'react';
import './App.css';
import AllMembersRoR from './AllMembersRoR';
import AllMembersEditRow from './AllMembersEditRow';

const AllMembers = (props) => {
    const [members, setMembers] = useState('');
    const[addFormData, setAddFormData] = useState({
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email: email,
        address: address,
        city: city,
        state: state, 
        zip_code: zipCode,
        is_active: isActive,
        balance: balance, 
    });

    const [editFormData, setEditFormData] = useState({
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email: email,
        address: address,
        city: city,
        state: state, 
        zip_code: zipCode,
        is_active: isActive,
        balance: balance, 
    });

    const [editMemberId, setEditMemberId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value; 
    
        const newFormData = {...AddFormData};
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
    }

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldName = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }  

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newMember = {
            id: id, 
            first_name: addFormData.firstName,
            middle_name: addFormData.middleName,
            last_name: addFormData.lastName,
            email: addFormData.email,
            address: addFormData.address,
            city: addFormData.city,
            state: addFormData.state, 
            zip_code: addFormData.zipCode,
            is_active: addFormData.isActive,
            balance: addFormData.balance, 
        }; 
        const newMembers = [...members, newMember];
        setMembers(newMembers);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedMember = {
            id: editMemberId, 
            first_name: editMemberId.firstName,
            middle_name: editMemberId.middleName,
            last_name: editMemberId.lastName,
            email: editMemberId.email,
            address: editMemberId.address,
            city: editMemberId.city,
            state: editMemberId.state, 
            zip_code: editMemberId.zipCode,
            is_active: editMemberId.isActive,
            balance: editMemberId.balance, 
        };

        const newMembers = [...members];

        const index = members.findIndex((member) =>
        member.id === editMemberId );

        newMembers[index] = editedMember; 

        setMembers(newMembers); 
        setEditMemberId(null);
    }; 

    const handleEditClick = (event, member) => {
        event.preventDefault();
        setEditMemberId(member.id)

        const formValues = {
            first_name: member.firstName,
            middle_name: member.middleName,
            last_name: member.lastName,
            email: member.email,
            address: member.address,
            city: member.city,
            state: member.state, 
            zip_code: member.zipCode,
            is_active: member.isActive,
            balance: member.balance,
        };

        setEditFormData(formValues)
    };

    const handleCancelClick = () => {
        setEditMemberId(null); 
    }; 

    const handleDeleteClick = (memberId) => {
        const newMembers = [...members];
        const index = members.findIndex((member)=> member.id === memberId);
        newMembers.splice(index, 1);
        setMembers(newMembers);
    };


    return (
        <div class="container-1">
            <h3>Member Directory</h3>  
        <form onSubmit={handleEditFormSubmit}>
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Middle Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                    <th>Active Status</th>
                    <th>Balance</th>
                </tr>

                <body>
                    {members.map((member) => (
                        <Fragment>
                            {editMemberId === member.id ?
                        ( <AllMembersEditRow 
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}/> ) :
                        ( <AllMembersRoR
                            member={member}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick} 
                        />
                        )}
                        </Fragment>
                    ))}

                </body>
            </table>
        </form>
                {props.parentEntries.map((member, index) => {
                    return (
                        <tr key={member.id}>
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
        </div>
    )
}

export default AllMembers; 
