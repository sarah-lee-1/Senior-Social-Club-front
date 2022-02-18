// import { Navigate } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import axios from 'axios'; 
import React, { useState, useEffect } from 'react';
import AllMembers from './Components/Admin/AllMembers'; 
import CreateNewMember from './Components/Admin/CreateNewMember';
import CreateMemberRequest from './Components/Member/CreateMemberReq';
import ViewSingleProfile from './Components/Member/ViewSingleProfile';
import CreateNewEvent from './Components/Admin/CreateNewEvent';
import AllEvents from './Components/Member/AllEvents';

// import NavBar from './Components/Navbar/Navbar';
// import ReviseProfile from './Components/Member/ReviseProfile';


function App() {
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const [member, setMember] = useState([]);
  const [members, setMembers] = useState([]); 

  useEffect(() => {
    getAllMembers();
    createMember();
    createRequest(); 
    viewSingleProfile(); 

  //   createAnEvent();
  //   allEvents();
    // revisedProfile();
    // viewSingleEvent();
    // updateEvent();
    // deleteEvent(); 
    // createRsvp();
    // viewEventMap(); 
       
  }, [])


  async function getAllMembers() {
    let response = await axios.get('http://127.0.0.1:8000/api/members/view_all_members/');
    setMembers(response.data)
  };

  
  async function createMember(NewMember) {
    let response = await axios.post('http://127.0.0.1:8000/api/members/create_member/', NewMember);
    if(response.status ===201) {
      console.log("New Member Created!")
      // await viewAllEvents();
    }
  };

 async function createRequest(NewRequest) {
   let response = await axios.post('http://127.0.0.1:8000/api/members/create_membership_request/', NewRequest);
   if(response.status === 201) {
     console.log("New Request Generated")
    //  await viewAllEvents();
   }
 };


  async function createAnEvent(makeNewEvent) {
    let response = await axios.post('http://127.0.0.1:8000/api/events/create_event/', makeNewEvent);
    if(response.status === 201) {
      console.log("New Event Created")
      // await viewAllEvents(); 
    }
  };


  async function allEvents() {
    let response = await axios.get('http://127.0.0.1:8000/api/events/view_all_events/'); 
    setEvents(response.data)
  }; 


  async function viewSingleProfile(id) {
      console.log("ViewSingleProfile - param: ", id)
    let response = await axios.get('http://127.0.0.1:8000/api/members/view_profile/${id}/', id); 
    if(response.status === 201) {
      console.log("Profile Retrieved")
      // await viewAllEvents();  
    }
  };

//   // EVENTS FUNCTIONS HERE 

//   async function viewSingleEvent(id) {
//     let response = await axios.get('http://127.0.0.1:8000/api/events/view_event/${id}/');
//     if(response.status === 201) {
//       await viewAllEvents();
//     }
//   }; 

  
//   async function updateProfile(alterProfile) {
//     let response = await axios.put('http://127.0.0.1:8000/api/members/update_profile/${alterProfile.id}/'), alterProfile;
//     if(response.data === 201) {
//       await viewAllEvents(); 
//     }
//   };

  
//   async function updateEvent(chgEvent) {
//     let response = await axios.put('http://127.0.0.1:8000/api/events/update_event/${id}'), chgEvent;
//     if(response.data === 201) {
//       await viewAllEvents();
//     }
//   };

  // 
//   async function deleteEvent(id) {
//     console.log("App.js ID: ", id)
//     let response = await axios.delete('http://127.0.0.1:8000/api/events/delete_event/${id}/');
//     if(response.status === 204) {
//       console.log("Event Deleted")
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
              
        <ViewSingleProfile mode={'Edit'}/>
        <CreateMemberRequest parentEntries={members} createRequest={createRequest}/> 

        <AllMembers parentEntries={members} />
        <CreateNewMember parentEntries={members} createMember={createMember}/>
        
        
        {/* <CreateNewEvent parentEntries={members} createAnEvent={createAnEvent}/>  */}
        
        {/* <AllEvents parentEntries={events} /> */}

        {/* <ReviseProfile revisedProfile={chgProfile}/> */}
        {/* <NavBar/> */}
        
    </div>
  );
}

export default App;


{/* <ViewSingleProfile parentEntries={members}/> RETURNS ALL MEMBERS */}



{/* <Routes>
  <Route path='/create_member/' element={CreateMember setMember{setMember}}/> 
</Routes> */}
