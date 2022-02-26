import React, { useState, Fragment } from 'react';
import AllMembersRoR from './AllMembersRoR';
import AllMembersEditRow from './AllMembersEditRow';


const AllMembers = (props) => {
    const [id, setid] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [isActive, setIsActive] = useState(''); 
    const [balance, setBalance] = useState('');

    const [members, setMembers] = useState([]);
    const[addFormData, setAddFormData] = useState({
        id: id,
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
        id: id,
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
    
        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;
    
        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    };

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
            <h2>Member Directory</h2>  
        <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <tr>First Name</tr>
                    <tr>Middle Name</tr>
                    <tr>Last Name</tr>
                    <tr>Email</tr>
                    <tr>Street Address</tr>
                    <tr>City</tr>
                    <tr>State</tr>
                    <tr>Zip Code</tr>
                    <tr>Active Status</tr>
                    <tr>Balance</tr>
                </thead>

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

            <h3>Add a Member</h3>
            <form onSubmit={handleAddFormSubmit}>
                {props.parentEntries.map((member, index) => {
                    return (
                    <form>
                        <input 
                        name='firstName'
                        type='text'
                        required='required'
                        placeholder='Enter first name...'
                        onChange={handleAddFormChange} />

                        <input
                        name='middleName'
                        type='text'
                        required='required'
                        placeholder='Enter middle name...'
                        onChange={handleAddFormChange} />

                        <input
                        name='lastName'
                        type='text' 
                        required='required'
                        placeholder='Enter last name...'               
                        onChange={handleAddFormChange} />

                        <input 
                        name='email'         
                        type='text' 
                        required='required'
                        placeholder='Enter email...'
                        onChange={handleAddFormChange} />

                        <input
                        name='address' 
                        type='text'
                        required='required'
                        placeholder='Enter address...'
                        onChange={handleAddFormChange} />

                        <input  
                        name='city'
                        type='text'
                        required='required'
                        placeholder='Enter city...'
                        onChange={handleAddFormChange} />

                        <input
                        name='state'
                        type='text' 
                        required='required'
                        placeholder='Enter state'
                        onChange={handleAddFormChange} />
                    
                        <input
                        name='zipCode' 
                        type='text' 
                        required='required'
                        placeholder='Enter zip code...'
                        onChange={handleAddFormChange} />
                  
                        <input 
                        name='isActive' 
                        type='integer' 
                        required='required'
                        placeholder='Is member active? '
                        onChange={handleAddFormChange} />
                 
                        <input
                        name='balance' 
                        type='integer' 
                        required='required'
                        placeholder='Enter balance'
                        onChange={handleAddFormChange} />

                        <button type='submit'>Add</button>
                    </form>
                    );
                })}
            </form>
        </div>
    );
}

export default AllMembers; 
