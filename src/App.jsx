import { Navigate } from 'react-router-dom'
import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import AllMembers from './Components/Admin/AllMembers'; 
import CreateNewMember from './Components/Xtra/CreateNewMember';
import CreateMemberRequest from './Components/Member/CreateMemberReq';
import ViewSingleProfile from './Components/Xtra/ViewSingleProfile';
import CreateNewEvent from './Components/Xtra/CreateNewEvent';
import AllEvents from './Components/Admin/AllEvents';
import EditAM from './Components/Xtra/EditAM'; 
// import Home from '.Components/Home/Home';
import NavBar from './Components/Navbar/Navbar';
import Login from './Components/Home/Login';
import Register from './Components/Home/Register';
import { Fragment } from 'react/cjs/react.production.min';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom'
import MapComponent from './Components/Map/MapComponent';

// import ReviseProfile from './Components/Member/ReviseProfile';


function App() {
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const [member, setMember] = useState([]);
  const [members, setMembers] = useState([]); 
  const [userName, setUserName] = useState('');

  useEffect(() => {
    getAllMembers();
    // updateMember(); 
    // createMember();
    allEvents();
    // updateEvent();
    // createAnEvent();
    // deleteEvent();
   

    // createRequest(); 
    // viewSingleProfile(); 

    // viewSingleEvent();
    // createRsvp();
    // viewEventMap(); 
       
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



// async function getMap() {
//   let response = await axios.get(`https://maps.googleapis.com/maps/api/
//     js?key=AIzaSyA2Sx-Xy3xjvPlwQenS_IAW0eA6Iv3Zsu0&callback=initMap`)
//   setMapData(response.data.items)
// }

//  async function createRequest(NewRequest) {
//    let response = await axios.post('http://127.0.0.1:8000/api/members/create_membership_request/', NewRequest);
//    if(response.status === 201) {
//      console.log("New Request Generated")
//     //  await viewAllEvents();
//    }
//  };


  // async function viewSingleProfile(id) {
  //     console.log("ViewSingleProfile - param: ", id)
  //   let response = await axios.get('http://127.0.0.1:8000/api/members/view_profile/${id}/', id); 
  //   if(response.status === 201) {
  //     console.log("Profile Retrieved")
  //     // await viewAllEvents();  
  //   }
  // };


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


//   async function viewEventMap(getMap) {
//     let response = await axios.get('insert Google maps Api here'), getMap;
//     if(response.status === 201) {
//       await viewAllEvents();
//     }
//   }


  return (
    <div className="homeContainer">
    <NavBar/>
        <div >
          <Routes>
              {/* <Route exact path='/' element={Home} /> */}
              <Route path='/login/' element={<Login userName={userName} /> } />
              <Route path='/register/' element={<Register userName={userName}/>} />
              
              <Route path='/view_events/' element={<AllEvents events={events} createAnEvent={createAnEvent} deleteEvent={deleteEvent} updateEvent={updateEvent}/> } />
              <Route path='/view_members/' element={<AllMembers members={members} createMember={createMember} updateMember={updateMember} /> } />
              <Route path='view_all_events' element={allEvents} /> 
        </Routes>
{/* 
        <React.Fragment>
          <MapComponent></MapComponent>
        </React.Fragment> */}

      </div>
    </div>
  );
};

export default App;

              // regUser={regUser} 
              {/* <Route path='view_all_events' element={allEvents} />  */}
              {/* <Route path='/get_all_members' element={getAllMembers} /> 

{/* <MapComponent></MapComponent> */}


{/* <Route path='Allevents' element={AllEvents} createAnEvent= {createAnEvent} updateEvent={updateEvent} deleteEvent={deleteEvent}/> */}
{/* <Route path='contact' element={Contact} /> */}
<>
              {/* <AllEvents path='AllEvents' element={AllEvents} />
              <AllMembers path='AllMembers' element={AllMembers} /> */}

</>

  {/* <>
  <AllEvents  events={events} createAnEvent= {createAnEvent} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
  <AllMembers members={members} createMember={createMember} updateMember={updateMember} />  */}
  // </>
  // }; 

  {/* <CreateMemberRequest parentEntries={members} createRequest={createRequest}/>  */}