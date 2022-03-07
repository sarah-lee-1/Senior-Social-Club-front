import axios from 'axios';
import React, { useState, useEffect, Fragment } from 'react';
import jwt_decode from 'jwt-decode';
import MemberEditRow from './MemberEditRow';
import MemberRoR from './MemberRoR';
// const decodedUser = jwt_decode(jwt); 


const MemberProfile = (props) => {
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
    const [member, setMember] = useState('');

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

    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
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
        props.updateProfile(editedMember);
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

    return (
        <div className="container-1">
            <h3>Member Profile</h3>  
            {/* {props.member.first_name} */}
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    {/* <thead>
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
                    </thead> */}
  
                        <Fragment>
                            <MemberRoR
                            member={props.member}
                            handleEditClick={handleEditClick} />  
                            
                            <MemberEditRow 
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick}/> 
                        </Fragment>
                    
                </table>
            </form>

        </div>
    );
}

export default MemberProfile;
