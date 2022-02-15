// import { Navigate } from 'react-router-dom'
// import ReactDOM from 'react-dom';
import axios from 'axios'; 
import React from 'react';
import React, { useState, useEffect } from 'react';
import CreateNewMember from './Components/Admin/CreateNewMember';


function App() {
  const [event, setEvent] = useState([]);
  const [events, setEvents] = useState([]);
  const [member, setMember] = useState([]);
  const [members, setMembers] = useState([]); 

  useEffect(() => {
    // viewAllMembers();
    createMember();
    // membershipRequest();
    // viewProfile();
    // updateProfile();
    // createEvent();
    // viewEvent(); 
    // updateEvent();
    // deleteEvent(); 
    // viewAllEvents();
    // createRsvp();
    // viewEventMap();     
  }, [])


  // async function viewAllMembers() {
  //   let response = await axios.get('http://127.0.0.1:8000/api/members/view_all_members/');
  //   setMembers(response.data)
  // };

  
  async function createMember() {
    let response = await axios.post('http://127.0.0.1:8000/api/members/create_member/'), createOneMember;
    if(response.status ===201) {
      console.log("New Member Created!")
      // await viewAllEvents();
    }
  };


//  async function membershipRequest(newRequest) {
//    let response = await axios.post('http://127.0.0.1:8000/api/members/create_membership_request/'), newRequest;
//    if(response.status === 201) {
//      console.log("New Request Generated")
//      await viewAllEvents();
//    }
//  };
 

//   async function viewProfile(id) {
//     let response = await axios.get('http://127.0.0.1:8000/api/members/view_profile/${id}/'); 
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

//   // EVENTS FUNCTIONS HERE 
//   async function createEvent(newEvent) {
//     let response = await axios.post('http://127.0.0.1:8000/api/events/create_event/'), newEvent;
//     if(response.status === 201) {
//       console.log("New Event Created")
//       await viewAllEvents(); 
//     }
//   };


//   async function viewEvent(id) {
//     let response = await axios.get('http://127.0.0.1:8000/api/events/view_event/${id}/');
//     if(response.status === 201) {
//       await viewAllEvents();
//     }
//   }; 

  
//   async function updateEvent(chgEvent) {
//     let response = await axios.put('http://127.0.0.1:8000/api/events/update_event/${id}'), chgEvent;
//     if(response.data === 201) {
//       await viewAllEvents();
//     }
//   };

  
//   async function deleteEvent(id) {
//     console.log("App.js ID: ", id)
//     let response = await axios.delete('http://127.0.0.1:8000/api/events/delete_event/${id}/');
//     if(response.status === 204) {
//       console.log("Event Deleted")
//       await viewAllEvents();
//     }
//   }; 


//   async function viewAllEvents() {
//     let response = await axios.get('http://127.0.0.1:8000/api/events/view_all_events/'); 
//     setEvents(response.data)
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
      <CreateNewMember parentEntries={members} createMember={createMember}/>>
    </div>
  );
}

export default App;
