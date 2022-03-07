import { React, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const Login = (props) => {
    let navigate = useNavigate();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const jwt = localStorage.getItem('token');
        try {
            const decodedUser = jwt_decode(jwt);
            props.setUserName(decodedUser);

        } catch {}

    }, [])

    async function login(loginUser) {
        let response = await axios.post('http://127.0.0.1:8000/api/auth/login/', loginUser);
        localStorage.setItem('token', response.data.access);

        navigate('/member_events/');
        if(response.status === 201) {

        };
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let loginUser = {
            username: username,
            password: password,
        }
        login(loginUser);
    };

    async function handleRegClick(event) {
        event.preventDefault();
        navigate('/register/');
    }

    async function handleAdminClick(event) {
        event.preventDefault();
        navigate('/admin_login/');
    }

    return (
        <div >
            <div className="login-box">
                <h3 className="login-logo">Senior Social Club</h3>
                <span className="login-desc">Join in on the Fun</span>
            </div>
            <div>
                <form className="login-form" onSubmit={handleSubmit}>
                    <input type='text' placeholder="User Name" required ='required' className="loginInput" onChange={(e) => setUserName(e.target.value)} defaultValue={username} />
                        <input type='text' placeholder="Password" required='required' className="loginInput" onChange={(e) => setPassword(e.target.value)} defaultValue={password}/>
                        <button 
                        className="login-btn"
                        >Log In</button>
                       
                        <button 
                        className='reg-btn' 
                        onClick={handleRegClick}
                        >Register</button>
                        
                        <button 
                        className='admin-btn' 
                        onClick={handleAdminClick}
                        >Admin Login</button>

                </form>
            </div>
        </div>
    );


}

export default Login; 

 {/* <span className="loginForgot">Forgot Password</span> */}