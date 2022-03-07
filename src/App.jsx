import { Navigate } from 'react-router-dom'
import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import AllMembers from './Components/Admin/AllMembers'; 
import AllEvents from './Components/Admin/AllEvents';
import MemberProfile from './Components/Member/MemberProfile';
import MEvents from './Components/Member/MEvents';
import NavBar from './Components/Navbar/Navbar';
import Login from './Components/Home/Login';
import Register from './Components/Home/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import MapComponent from './Components/Map/MapComponent';

// import CreateMemberRequest from './Components/Member/CreateMemberReq';
// import ViewSingleProfile from './Components/Xtra/ViewSingleProfile';
// import CreateNewMember from './Components/Xtra/CreateNewMember';
// import CreateNewEvent from './Components/Xtra/CreateNewEvent';
// import ReviseProfile from './Components/Member/ReviseProfile';
// import EditAM from './Components/Xtra/EditAM'; 
// import Home from '.Components/Home/Home';

function App() {
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const [member, setMember] = useState([]);
  const [members, setMembers] = useState([]); 
  const [userName, setUserName] = useState('');

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


  useEffect(() => {
    getAllMembers();
    allEvents(); 
    viewMember();
  }, [])


  async function getAllMembers() {
    let response = await axios.get(`http://127.0.0.1:8000/api/members/view_all_members/`);
    setMembers(response.data)
  };

    async function updateMember(editedMember) {
      console.log(editedMember)
    let response = await axios.put(`http://127.0.0.1:8000/api/members/update_profile/${editedMember.id}/`, editedMember);
    if(response.data === 201) {
      // await viewAllEvents(); 
    }
  };

  async function createMember(newMember) {
    let response = await axios.post('http://127.0.0.1:8000/api/members/create_member/', newMember);
    if(response.status ===201) {
      console.log("New Member Created!")
      // await viewAllEvents();
    }
  };

    async function allEvents() {
    let response = await axios.get(`http://127.0.0.1:8000/api/events/view_all_events/`); 
    setEvents(response.data)
  }; 


    async function updateEvent(editedEvent) {
    let response = await axios.put(`http://127.0.0.1:8000/api/events/update_event/${editedEvent.id}/`, editedEvent);
    if(response.data === 201) {
      // await viewAllEvents();
    }
  };
  
  async function createAnEvent(newEvent) {
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newEvent.street},${newEvent.city},${newEvent.state}&key=AIzaSyCu8MBgrDWN_kh5WIL1sTmura5i1v-mdOE`)
    console.log(response.data)
    newEvent.lat = response.data.results[0].geometry.location.lat
    newEvent.lng = response.data.results[0].geometry.location.lng
    let response2 = await axios.post('http://127.0.0.1:8000/api/events/create_event/', newEvent);
    if(response2.status === 201) {
      console.log("New Event Created")
      // await viewAllEvents(); 
    }
  };

  async function deleteEvent(id) {
    // console.log("App.js ID: ", id)
    let response = await axios.delete(`http://127.0.0.1:8000/api/events/delete_event/${id}/`);
    if(response.status === 204) {
      console.log("Event Deleted")
      // await viewAllEvents();
    }
  }; 

  async function updateProfile(editedMember) {
    console.log(editedMember)
  let response = await axios.put(`http://127.0.0.1:8000/api/members/update_member/${editedMember.id}/`, editedMember);
  if(response.data === 201) {
    // await viewAllEvents(); 
  }
};

  async function viewMember(id) {
    let response = await axios.get(`http://127.0.0.1:8000/api/members/view_profile/${3}/`);
    console.log(response.status)
    setMember(response.data)
    if(response.status === 200) {
     
     
    }
  }; 




  return (
    <div className="homeContainer">
    <NavBar/>
        <div >
          <Routes>
              <Route path='/' element={<Login userName={userName} /> } />
              <Route path='/admin_login/' element={<Login userName={userName} /> } />
              <Route path='/register/' element={<Register />} />
              <Route path='/view_events/' element={<AllEvents events={events} createAnEvent={createAnEvent} deleteEvent={deleteEvent} updateEvent={updateEvent}/> } />
              <Route path='/view_members/' element={<AllMembers members={members} createMember={createMember} updateMember={updateMember} /> } />
     
              <Route path='/member_events/' element={<MEvents events={events}/>} /> 
            
              <Route path='/members/' element={<MemberProfile member={member} updateProfile={updateProfile} />} /> 
                    
          </Routes> 
      </div>

    </div>
  );
};

export default App;

{/* <React.Fragment>
<MapComponent></MapComponent>
</React.Fragment> */}

{/* <MapComponent></MapComponent> */} 

//   async function updateProfile(id) {
//     console.log("ViewSingleProfile - param: ", id)
//     let response = await axios.put(`http://127.0.0.1:8000/api/members/update_member/${id}/`);
//     if (response.status === 200) {
//         console.log("Profile Retrieved")
//         let foundProfile = response.data;
//         console.log('foundProfile', foundProfile)
//         setFirstName(foundProfile.first_name);
//         setMiddleName(foundProfile.middle_name);
//         setLastName(foundProfile.last_name);
//         setEmail(foundProfile.email);
//         setAddress(foundProfile.address);
//         setCity(foundProfile.city);
//         setState(foundProfile.state);
//         setZipCode(foundProfile.zip_code);
//         setIsActive(foundProfile.IsActive);
//         setBalance(foundProfile.balance); 
//     }
// }; 

//   async function updateProfile(id) {
//     console.log("ViewSingleProfile - param: ", id)
//     let response = await axios.get(`http://127.0.0.1:8000/api/members/view_profile/${id}/`);
//     if (response.status === 200) {
//         console.log("Profile Retrieved")
//         let foundProfile = response.data;
//         console.log('foundProfile', foundProfile)
//         setFirstName(foundProfile.first_name);
//         setMiddleName(foundProfile.middle_name);
//         setLastName(foundProfile.last_name);
//         setEmail(foundProfile.email);
//         setAddress(foundProfile.address);
//         setCity(foundProfile.city);
//         setState(foundProfile.state);
//         setZipCode(foundProfile.zip_code);
//         setIsActive(foundProfile.IsActive);
//         setBalance(foundProfile.balance); 

//     }
// };

//  async function createRequest(NewRequest) {
//    let response = await axios.post('http://127.0.0.1:8000/api/members/create_membership_request/', NewRequest);
//    if(response.status === 201) {
//      console.log("New Request Generated")
//     //  await viewAllEvents();
//    }
//  };

//   async function viewSingleEvent(id) {
//     let response = await axios.get('http://127.0.0.1:8000/api/events/view_event/${id}/');
//     if(response.status === 201) {
//       await viewAllEvents();
//     }
//   }; 

  
//   async function createRsvp(newRsvp) {
//     let response = await axios.post('http://127.0.0.1:8000/api/events/rsvp_event/2/'), newRsvp;
//     if(response.status === 201) {
//       console.log("New RSVP Generated")
//       await viewAllEvents();
//     }
//   };