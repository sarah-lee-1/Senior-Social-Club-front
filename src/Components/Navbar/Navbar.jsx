import { Link } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

const NavBar = (props) => {
  <nav id="navbar">
    <ul>
      <Link to='/'>Home</Link>
      <Link to='/login/'>Login</Link>
      <Link to='/Register/'>Register</Link> 
      <Link to='/Contact/'>Register</Link> 
    </ul>
  </nav>


}

export default NavBar; 