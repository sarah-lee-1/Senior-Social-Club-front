import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { React, useState, useEffect } from 'react'

const Register = () => {
    let navigate = useNavigate();

    const [newUser, setNewUser] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] =useState ('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    async function regUser(regUser) {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', regUser);
        if (response.status === 201) {
        setNewUser(response.data)
        };
    };   

    function handleSubmit(event) {
        let regUser = {
            newuser: newuser,
            password: password,
            first_name: firstName,
            middle_name: middleName,
            last_name: lastName,
            email: email,
            address: address,
            city: city,
            state: state, 
            zip_code: zipCode,
        };
            regUser(regUser);
            console.log(regUser) 
            navigate('/login/')
    };

    return (
            <div className="registerWrapper" >
                <div className="registerCenter">
                    <h3 className="registerLogo">Senior Social Club</h3>
                    <span className="registerDesc">Join Today</span>
                </div>
                <div className="registerCtr" >
                        <form className="reg-box" onSubmit={handleSubmit}>
                            <input type='text' placeholder="Username" required='required' className="registerinInput" onChange={(e) => setNewUser(e.target.value)} defaultValue={newUser} />
                            <input type='text' placeholder="Password" required='required' className="registerInput" onChange={(e) => setPassword(e.target.value)} defaultValue={password}/>
                            <input type='email' placeholder="Email" required='required' className="registerInput" onChange={(e) => setEmail(e.target.value)} defaultValue={email}/>
                            <input type='text' placeholder="First Name" required='required' className="registerInput" onChange={(e) => setFirstName(e.target.value)} defaultValue={firstName}/>
                            <input type='text' placeholder="Middle Name" required='required' className="registerInput" onChange={(e) => setMiddleName(e.target.value)} defaultValue={middleName}/>
                            <input type='text' placeholder="Last Name" required='required' className="registerInput" onChange={(e) => setLastName(e.target.value)} defaultValue={lastName}/>
                            <input type='text' placeholder="Address" required='required' className="registerInput" onChange={(e) => setAddress(e.target.value)} defaultValue={address}/>
                            <input type='text' placeholder="City" required='required' className="registerInput" onChange={(e) => setCity(e.target.value)} defaultValue={city}/>
                            <input type='text' placeholder="State" required='required' className="registerInput" onChange={(e) => setState(e.target.value)} defaultValue={state}/>
                            <input type='text' placeholder="Zip Code" required='required' className="registerInput" onChange={(e) => setZipCode(e.target.value)} defaultValue={zipCode}/>
                            <button className="registerButton" type='submit' >Sign Up</button>     
                        </form>
                </div>
            </div>
    )
}

export default Register;
