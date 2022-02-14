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
 

  async function viewProfile(getProfile) {
    let response = await axios.get('http://127.0.0.1:8000/api/members/view_profile/1/'), getProfile; 
    if(response.status === 201) {
      await viewAllEvents();  
    }
  };

  
  async function updateProfile(chgProfile) {
    let response = await axios.put('http://127.0.0.1:8000/api/members/update_profile/1/'), chgProfile;
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


  async function viewEvent(getEvent) {
    let response = await axios.get('http://127.0.0.1:8000/api/events/view_event/2/'), getEvent;
    if(response.status === 201) {
      await viewAllEvents();
    }
  }; 


  // update_event
  // delete_event
  // view_all_events
  // rsvp_event
  // view_event_map


  return (
    <div>
      <h3>HELLO WORLD</h3>
    </div>
  );
}

export default App;
