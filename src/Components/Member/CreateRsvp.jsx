// import React, { useState } from 'react';

// const CreateRsvp = (props) => {

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [month, setMonth] = useState('');
//     const [day, setDay] = useState('');
//     const [year, setYear] = useState('');
//     const [time, setTime] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');


//     function handleSubmit(event) {
//         event.preventDefault();
//         let rsvpRequest = {
//             title: title,
//             description: description,
//             month: month,
//             day: day,
//             year: year,
//             time: time,
//             first_name: firstName,
//             last_name: lastName,
//             email: email,
//         }
//         console.log(rsvpRequest);
//         props.submitRsvp(rsvpRequest);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//         <label>Title</label>
//         <input type='paragraph' onChange={(event) => setTitle(event.target.value)} value={title}/>
//         <label>Description</label>
//         <input type='paragraph' onChange={(event) => setDescription(event.target.value)} value={description}/>
//         <label>Month</label>
//         <input type='name' onChange={(event) => setMonth(event.target.value)} value={month}/>
//         <label>Day</label>
//         <input type='number' onChange={(event) => setDay(event.target.value)} value={day}/>
//         <label>Year</label>
//         <input type='number' onChange={(event) => setYear(event.target.value)} value={year}/>
//         <label>Time</label>
//         <input type='time' onChange={(event) => setTime(event.target.value)} value={time}/>
//         <label>First Name</label>
//         <input type='name' onChange={(event) => setFirstName(event.target.value)} value={firstName}/>
//         <label>Last Name</label>
//         <input type='name' onChange={(event) => setLastName(event.target.value)} value={lastName}/>
//         <label>Email</label>
//         <input type='email' onChange={(event) => setEmail(event.target.value)} value={email}/>
//         <button type='submit'>Submit RSVP</button>
//     </form>
//     )
// }

// export default CreateRsvp; 