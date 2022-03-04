import Login from './Login';
import Register from './Register';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from 'react-router-dom';

const Home(props) {

    <div>
    <Routes> 
        <Route exact path='/*' element={<Home user={user}/>} /> 
        <Route path='/login/' element={<Login setUser={setUser}/>} /> 
        <Route path='/register/' element={<Register/>} />
    </Routes>
    </div>

}







