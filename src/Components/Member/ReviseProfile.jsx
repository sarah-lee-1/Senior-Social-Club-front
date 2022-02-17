import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode'; 

const ReviseProfile = (props) => {

    const [id, setId] = useState('');
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
    const jwt = localStorage.getItem('token');
    const decodedUser = jwt_decode(jwt);     


    function handleSubmit(event) {
        event.preventDefault();
        let chgProfile = {
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
        }
        console.log(chgProfile);
        props.revisedProfile(chgProfile);
    }

    useEffect(() => {
        setId(decodedUser.user_id)
    },[])

    useEffect(() => {
        if (id !== '') updateProfile()
    },[id])

    
    async function updateProfile() {
        console.log("ReviseProfile - param: ", id)
        let response = 
        await axios.put(`http://127.0.0.1:8000/api/members/update_profile/${id}/`);
        if (response.data === 200) {
            console.log("Profile Retrieved")
            let foundProfile = response.data;
            console.log('foundProfile', foundProfile)
            setFirstName(foundProfile.first_name);
            setMiddleName(foundProfile.middle_name);
            setLastName(foundProfile.last_name);
            setEmail(foundProfile.email);
            setAddress(foundProfile.address);
            setCity(foundProfile.city);
            setState(foundProfile.state);
            setZipCode(foundProfile.zip_code);
            setIsActive(foundProfile.IsActive);
            setBalance(foundProfile.balance); 
        }
    };

    return (
        <Fragment>
        <form onSubmit={handleSubmit}>
            <h3>Update Profile</h3>
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
            <button type='submit' onClick={handleSubmit}>Update Profile</button>
        </form>
        </Fragment>
    )
}

export default ReviseProfile; 

// onClick={handleClick}

                {/* <div>
                <script type="text/javascript">
                    form.getElementById("myButton").onclick = function () {
                    location.href = "__member url___";};
                </script> 
            </div> */}
    
    // const [isEditing, setIsEditing] = useState(false);
    //let isEditing = false;
    //isEditing = true;
    //console.log(isEditing)

    //const [isEditing, setIsEditing] = useState(false);
    //setIsEditing(true);
    //console.log(isEditing)
    //if(isEditing == true){

    //}


    // const editButton = () => {
    //     const [state, setState] = useState(false)

    //     function editDetail() {
    //         setState(!state);
    //     }}

    
                    {/* If props.mode = "Edit" */}
                    {/* {props.mode == 'Edit' &&
                        <button
                            type='edit'
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>} */}