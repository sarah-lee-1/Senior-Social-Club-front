import React, { useState, useEffect } from 'react';


function App() {

  const [events, setEvents] = useState([]);
  conts [member, setMember] = useState([]);
  conts [members, setMembers] = useState([]);
  const [socialClubs, setSocialClubs] = useState([]);

  useEffect(() => {
    viewAllMembers();
    createMember();

  
     
  }, [])



  async function viewAllMembers() {
    let response = await axios.get('http://127.0.0.1:8000/api/members/view_all_members/');
    setMembers(response.data)
  }

  // create_member
  async function createMember(newMember) {
    let response = await axios.post('http://127.0.0.1:8000/api/members/create_member/'), newMember;
    if(response.status ===201) {
      console.log("New Member Created!")
      await getAllMembers();
    }
  }

 
  // membership_request
  // view_profile
  // update_profile

  // create_event
  // view_event
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
