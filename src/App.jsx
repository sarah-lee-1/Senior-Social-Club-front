// import { Navigate } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import AllMembers from './Components/Admin/AllMembers'; 
import CreateNewMember from './Components/Admin/CreateNewMember';
import CreateMemberRequest from './Components/Member/CreateMemberReq';
import ViewSingleProfile from './Components/Member/ViewSingleProfile';
// import ReviseProfile from './Components/Member/ReviseProfileOrif';
import CreateNewEvent from './Components/Admin/CreateNewEvent';
import AllEvents from './Components/Admin/AllEvents';
import EditAM from './Components/Admin/EditAM';

// import NavBar from './Components/Navbar/Navbar';
// import ReviseProfile from './Components/Member/ReviseProfile';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import MapComponent from './Components/Map/MapComponent';


function App() {
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const [member, setMember] = useState([]);
  const [members, setMembers] = useState([]); 

  useEffect(() => {
    getAllMembers();
    updateMember(); 
    allEvents();
    updateEvent();
    deleteEvent();
    createMember();
    // createRequest(); 
    // viewSingleProfile(); 
    //  createAnEvent();
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

  async function deleteEvent(id) {
    // console.log("App.js ID: ", id)
    let response = await axios.delete(`http://127.0.0.1:8000/api/events/delete_event/${id}/`);
    if(response.status === 204) {
      console.log("Event Deleted")
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


  // async function viewSingleProfile(id) {
  //     console.log("ViewSingleProfile - param: ", id)
  //   let response = await axios.get('http://127.0.0.1:8000/api/members/view_profile/${id}/', id); 
  //   if(response.status === 201) {
  //     console.log("Profile Retrieved")
  //     // await viewAllEvents();  
  //   }
  // };

//   // EVENTS FUNCTIONS HERE 



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
    <div>
      {/* <MapComponent></MapComponent> */}

      <AllEvents  events={events} createAnEvent= {createAnEvent} updateEvent={updateEvent} deleteEvent={deleteEvent}/>
      <AllMembers members={members} updateMember={updateMember} createMember={createMember} /> 

            {/* <CreateNewEvent createAnEvent= {createAnEvent} /> */}
        {/* <Router>
          <Routes>
    
          <Route path='/update_profile' element={<EditAM members={members}/>}/>
            
          </Routes>
        </Router> */}

        
        {/* <Route path='/update_members/' element={<AllMembers members={members}/>}/>  */}
      {/* // <Route AllMembers parentEntries={members}/>   */}
        {/* <ViewSingleProfile mode={'Edit'}/>
        <CreateMemberRequest parentEntries={members} createRequest={createRequest}/> 
        <AllMembers parentEntries={members} />
        <CreateNewMember parentEntries={members} createMember={createMember}/> */}

        {/* <ReviseProfile revisedProfile={members} revisedProfile={revisedProfile}/> */}
        
        {/* <CreateNewEvent parentEntries={members} createAnEvent={createAnEvent}/>  */}
        
        {/* <AllEvents parentEntries={events} /> */}


        {/* <NavBar/> */}
        
    </div>
  );
}

export default App;

{/* <Route exact path='/*' element={<Home user={user}/>}/>  */}

{/* <ViewSingleProfile parentEntries={members}/> RETURNS ALL MEMBERS */}



{/* <Routes>
  <Route path='/create_member/' element={CreateMember setMember{setMember}}/> 
</Routes> */}


// <Link to="/about">About</Link>
// <div>
//         <Routes>
//           <Route exact path='/*' element={<Home user={user}/>} />
//           <Route path='/login/' element={<Login setUser={setUser}/>} />
//           <Route path='/register/' element={<Register/>} />
//         </Routes>
//     </div>