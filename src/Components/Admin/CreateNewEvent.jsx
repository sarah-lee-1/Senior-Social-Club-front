import React, { useState } from 'react';
import axios from 'axios';

const CreateNewEvent = (props) => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [year, setYear] = useState('');
    const [time, setTime] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        let newEvent = {
            title: title,
            description: description,
            month: month,
            day: day,
            year: year,
            time: time,
            street: street,
            city: city,
            state: state,
            zip_code: zipCode,
        }
        console.log(newEvent);
          
    let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${newEvent.street},${newEvent.city},${newEvent.state}&key=AIzaSyCu8MBgrDWN_kh5WIL1sTmura5i1v-mdOE`)
    console.log(response.data)
    newEvent.lat = response.data.results[0].geometry.location.lat
    newEvent.lng = response.data.results[0].geometry.location.lng

  
        props.createAnEvent(newEvent);
    }

    return (
        <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type='paragraph' onChange={(event) => setTitle(event.target.value)} value={title}/>
        <label>Description</label>
        <input type='paragraph' onChange={(event) => setDescription(event.target.value)} value={description}/>
        <label>Month</label>
        <input type='name' onChange={(event) => setMonth(event.target.value)} value={month}/>
        <label>Day</label>
        <input type='number' onChange={(event) => setDay(event.target.value)} value={day}/>
        <label>Year</label>
        <input type='number' onChange={(event) => setYear(event.target.value)} value={year}/>
        <label>Time</label>
        <input type='time' onChange={(event) => setTime(event.target.value)} value={time}/>
        <label>Street</label>
        <input type='paragraph' onChange={(event) => setStreet(event.target.value)} value={street}/>
        <label>City</label>
        <input type='name' onChange={(event) => setCity(event.target.value)} value={city}/>
        <label>State</label>
        <input type='name' onChange={(event) => setState(event.target.value)} value={state}/>
        <label>Zip Code</label>
        <input type='zip_code' onChange={(event) => setZipCode(event.target.value)} value={zipCode}/>
        <button type='submit'>Add Event</button>
    </form>
    )
}

export default CreateNewEvent; 