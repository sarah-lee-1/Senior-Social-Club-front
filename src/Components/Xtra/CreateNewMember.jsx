import React, { useState } from 'react';

const CreateNewMember = (props) => {
    
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

    function handleSubmit(event) {
        event.preventDefault();
        let createOneMember = {
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
        }
        console.log(createOneMember);
        props.createMember(createOneMember);
    }

    return (
        <div class="box-1">
            <h3>Membership Approval</h3>
        <form onSubmit={handleSubmit}>
            <label>First Name</label>
            <input type='name' onChange={(event) => setFirstName(event.target.value)} value={firstName}/>
            <label>Middle Name</label>
            <input type='name' onChange={(event) => setMiddleName(event.target.value)} value={middleName}/>
            <label>Last Name</label>
            <input type='name' onChange={(event) => setLastName(event.target.value)} value={lastName}/>
            <label>Email</label>
            <input type='email' onChange={(event) => setEmail(event.target.value)} value={email}/>
            <label>Address</label>
            <input type='address' onChange={(event) => setAddress(event.target.value)} value={address}/>
            <label>City</label>
            <input type='city' onChange={(event) => setCity(event.target.value)} value={city}/>
            <label>State</label>
            <input type='state' onChange={(event) => setState(event.target.value)} value={state}/>
            <label>Zip Code</label>
            <input type='zip_code' onChange={(event) => setZipCode(event.target.value)} value={zipCode}/>
            <label>Member Status</label>
            <input type='status' onChange={(event) => setIsActive(event.target.value)} value={isActive}/>
            <label>Balance</label>
            <input type='balance' onChange={(event) => setBalance(event.target.value)} value={balance}/>
            <button type='submit'>Add Member</button>
        </form>
        </div>
    )
}

export default CreateNewMember; 

        // <Fragment>
        //     <div>
        //         <h1>Create New Member</h1>
        //     </div>
        //     <div>
        //         <h2>Form</h2>

                    // </div>
        // </Fragment>