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
        <Link to='/'/><li>Home</li>
        <Link to='/login/'/><li>Login</li>
        {/* <Link to='/Contact/'/><li>Contact</li> */}
        </ul>
      </div>
            <div className="logoutBox" >
                <button className="logoutButton" onClick={handleLogout}>Logout</button>
            </div>  
      </Fragment>
  </nav>
  );
  

}

export default NavBar; 