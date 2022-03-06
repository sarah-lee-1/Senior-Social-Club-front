import Login from '../Home/Login';
import { Fragment } from 'react/cjs/react.development';
// import Contact from '../Contact';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const NavBar = (props) => {

    async function handleLogout(){
    localStorage.clear(props.token);
    
    console.log(props.token);
    window.location.replace('http://localhost:3000/login/');
  }; 

  return (
    <nav className="navbar">
      
      <Fragment>
      <div>
      <ul>
        <li>
          <Link to='/'>Login</Link>
        </li>
        <li>
        <Link to='/view_events/'>Admin Events</Link>
        </li>
        <li>
        <Link to='/view_members/'>Admin Members</Link>
        </li>
        <li>
        <Link to='/members/'>Members</Link>
        </li>


        </ul>
      </div>
            <div className="logoutBox" >
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </div>  
      </Fragment>
  </nav>
  );
  

}

export default NavBar; 
{/* 
// <Link to='/'/><li>Home</li>
        // <Link to='/login/'/><li>Login</li> */}
        {/* <Link to='/Contact/'/><li>Contact</li> */}