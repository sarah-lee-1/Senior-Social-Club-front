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
    }, []);

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
    }, []);

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
            id: editMemberId, 
            first_name: addFormData.first_name,
            middle_name: addFormData.middle_name,
            last_name: addFormData.last_name,
            email: addFormData.email,
            address: addFormData.address,
            city: addFormData.city,
            state: addFormData.state, 
            zip_code: addFormData.zip_code,
            is_active: addFormData.is_active,
            balance: addFormData.balance, 
        }; 
        const newMembers = [...props.members, newMember];
        setMembers(newMembers);
        props.createMember(newMember)
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        console.log("handleEditFormSubmit: here it is   " + editMemberId)
        const editedMember = {
            id: editMemberId,
            first_name: editFormData.first_name,
            middle_name: editFormData.middle_name,
            last_name: editFormData.last_name,
            email: editFormData.email,
            address: editFormData.address,
            city: editFormData.city,
            state: editFormData.state, 
            zip_code: editFormData.zip_code,
            is_active: editFormData.is_active,
            balance: editFormData.balance, 
        };
        console.log(editedMember)
        const newMembers = [...props.members];

        const index = props.members.findIndex((member) =>
        member.id === editMemberId );
        newMembers[index] = editedMember; 

        setMembers(newMembers); 
        setEditMemberId(null);
        console.log(editedMember)
        props.updateMember(editedMember);
    }; 
    
    const handleEditClick = (event, member) => {
        event.preventDefault();
        setEditMemberId(member.id)
        
        const formValues = {
            first_name: member.first_name,
            middle_name: member.middle_name,
            last_name: member.last_name,
            email: member.email,
            address: member.address,
            city: member.city,
            state: member.state, 
            zip_code: member.zip_code,
            is_active: member.is_active,
            balance: member.balance,
        };

        setEditFormData(formValues)
    };

    const handleCancelClick = () => {
        setEditMemberId(null); 
    }; 

    const handleDeleteClick = (memberId) => {
        const newMembers = [...props.members];
        const index = props.members.findIndex((member)=> member.id === memberId);
        newMembers.splice(index, 1);
        setMembers(newMembers);
    };

    return (
        <div className="container-1">
            <h3>Member Directory</h3>  
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

              
                    {props.members.map((member) => (
                        <Fragment>
                            {editMemberId === member.id ?
                        ( <AllMembersEditRow 
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}/> ) :
                        ( <AllMembersRoR
                            member={member}
                            handleEditClick={handleEditClick}
                            handleDeleteClick={handleDeleteClick} />)
                        }
                        </Fragment>
                    ))}
            </table>
            </form>

            <h3>Add a Member</h3>
            <form className='box-1' onSubmit={handleAddFormSubmit}>
                        <input 
                        name='first_name'
                        type='text'
                        required='required'
                        placeholder='Enter first name...'
                        onChange={handleAddFormChange} />

                        <input
                        name='middle_name'
                        type='text'
                        required='required'
                        placeholder='Enter middle name...'
                        onChange={handleAddFormChange} />

                        <input
                        name='last_name'
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
                        name='zip_code' 
                        type='text' 
                        required='required'
                        placeholder='Enter zip code...'
                        onChange={handleAddFormChange} />
                  
                        <input 
                        name='is_active' 
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
        </div>
    );
}

export default AllMembers;
