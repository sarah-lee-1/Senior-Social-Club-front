import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

const ViewSingleProfile = (props) => {

    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [isActive, setIsActive] = useState(true);
    const [balance, setBalance] = useState('');
    const jwt = localStorage.getItem('token');
    const decodedUser = jwt_decode(jwt); 
    

    function handleSubmit(event) {
        event.preventDefault();
        let userRecord = {
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
        console.log(userRecord);
        viewProfile(userRecord)
    }

    useEffect(() => {
        setId(decodedUser.user_id)
    },[])

    useEffect(() => {
        if (id !== '') viewProfile()
    },[id])

    async function viewProfile() {
        console.log("ViewSingleProfile - param: ", id)
        let response = await axios.get(`http://127.0.0.1:8000/api/members/view_profile/${id}/`);
        if (response.status === 200) {
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
            <div>
                <h1>Member Profile</h1>
            </div>
            <div class="box-2">
                <h2>Form</h2>
                <h4>{firstName}</h4>
                <h4>{middleName}</h4>
                <h4>{lastName}</h4>
                <h4>{email}</h4>
                <h4>{address}</h4>
                <h4>{city}</h4> 
                <h4>{state}</h4>
                <h4>{zipCode}</h4>
                <h4>{balance}</h4>
            </div>
        </Fragment>
    )
}

export default ViewSingleProfile
