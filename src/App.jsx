import React, { useState, useEffect } from 'react';


function App() {

  const [events, setEvents] = useState([]);
  conts [member, setMember] = useState([]);
  conts [members, setMembers] = useState([]);
  const [socialClubs, setSocialClubs] = useState([]);

  useEffect(() => {
    viewAllMembers();
    createMember();
    membershipRequest();
    viewProfile();
    updateProfile();
    createEvent();
    viewEvent(); 
    updateEvent();
    deleteEvent(); 
    viewAllEvents();

     
  }, [])


  async function viewAllMembers() {
    let response = await axios.get('http://127.0.0.1:8000/api/members/view_all_members/');
    setMembers(response.data)
  };

  
  async function createMember(newMember) {
    let response = await axios.post('http://127.0.0.1:8000/api/members/create_member/'), newMember;
    if(response.status ===201) {
      console.log("New Member Created!")
      await viewAllEvents();
    }
  };


 async function membershipRequest(newRequest) {
   let response = await axios.post('http://127.0.0.1:8000/api/members/create_membership_request/'), newRequest;
   if(response.status === 201) {
     console.log("New Request Generated")
     await viewAllEvents();
   }
 };
 

  async function viewProfile(id) {
    let response = await axios.get('http://127.0.0.1:8000/api/members/view_profile/${id}/'); 
    if(response.status === 201) {
      await viewAllEvents();  
    }
  };

  
  async function updateProfile(id) {
    let response = await axios.put('http://127.0.0.1:8000/api/members/update_profile/${id}/');
    if(response.data === 201) {
      await viewAllEvents(); 
    }
  };

  // EVENTS FUNCTIONS HERE 
  async function createEvent(newEvent) {
    let response = await axios.post('http://127.0.0.1:8000/api/events/create_event/'), newEvent;
    if(response.status === 201) {
      console.log("New Event Created")
      await viewAllEvents(); 
    }
  };


  async function viewEvent(id) {
    let response = await axios.get('http://127.0.0.1:8000/api/events/view_event/${id}/');
    if(response.status === 201) {
      await viewAllEvents();
    }
  }; 

  
  async function updateEvent(chgEvent) {
    let response = await axios.put('http://127.0.0.1:8000/api/events/update_event/${id}'), chgEvent;
    if(response.data === 201) {
      await viewAllEvents();
    }
  };

  
  async function deleteEvent(id) {
    console.log("App.js ID: ", id)
    let response = await axios.delete('http://127.0.0.1:8000/api/events/delete_event/${id}/');
    if(response.status === 204) {
      console.log("Event Deleted")
      await viewAllEvents();
    }
  }; 


  async function viewAllEvents() {
    let response = await axios.get('http://127.0.0.1:8000/api/events/view_all_events/'); 
    setEvents(response.data)
  }; 

  // rsvp_event
  async function createRsvp(newRsvp) {
    let response = await axios.post('http://127.0.0.1:8000/api/events/rsvp_event/2/'), newRsvp;
    if(response.status === 201) {
      console.log("New RSVP Generated")
      await viewAllEvents();
    }
  };


  // view_event_map


  return (
    <div>
      <h3>HELLO WORLD</h3>
    </div>
  );
}

export default App;
