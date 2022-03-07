import { useState, Fragment } from "react";
import MEventsRoR from './MEventsRoR';
import MEventsEditRow from './MEventsEditRow';
import MapComponent from "../Map/MapComponent";

const MEvents = (props) => {
    const [id, setid] = useState('');
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
    const [events, setEvents] = useState('');

    const [todods, setTodos] = useState(''); 


    // const [addFormData, setAddFormData] = useState({
    //     title: title,
    //     description: description,
    //     month: month,
    //     day: day,
    //     year: year,
    //     time: time,
    //     street: street,
    //     city: city,
    //     state: state,
    //     zip_code: zipCode,
    // }, []);

    const [editFormData, setEditFormData] = useState({
        id: id,
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
    }, []);

    const [editEventId, setEditEventId] = useState(null);

    // const handleAddFormChange = (event) => {
    //     event.preventDefault();

    //     const fieldName = event.target.getAttribute('name');
    //     const fieldValue = event.target.value;
     
    //     const newFormData = {...addFormData};
    
    //     newFormData[fieldName] = fieldValue;

    //     setAddFormData(newFormData);
    // };

    const handleEditFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value; 

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    // const handleAddFormSubmit = (event) => {
    //     event.preventDefault();

    //     const newEvent = {
    //     title: addFormData.title,
    //     description: addFormData.description,
    //     month: addFormData.month,
    //     day: addFormData.day,
    //     year: addFormData.year,
    //     time: addFormData.time,
    //     street: addFormData.street,
    //     city: addFormData.city,
    //     state: addFormData.state,
    //     zip_code: addFormData.zip_code,
    //     };
    //     const newEvents = [props.events, newEvent];
    //     setEvents(newEvents);
    //     props.createAnEvent(newEvent)
    // };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        
        const editedEvent = {
            id: editEventId,
            title: editFormData.title,
            description: editFormData.description,
            month: editFormData.month,
            day: editFormData.day,
            year: editFormData.year,
            time: editFormData.time,
            street: editFormData.street,
            city: editFormData.city,
            state: editFormData.state,
            zip_code: editFormData.zip_code,
        };
        const newEvents = [...props.events];

        const index = props.events.findIndex((event) => 
        event.id === editEventId);
        newEvents[index] = editedEvent;

        setEvents(newEvents);
        setEditEventId(null);
        props.updateEvent(editedEvent);
    };

    const handleEditClick = (edit, event) =>{
        edit.preventDefault();
        setEditEventId(event.id)

        const formValues = {
            title: event.title,
            description: event.description,
            month: event.month,
            day: event.day,
            year: event.year,
            time: event.time,
            street: event.street,
            city: event.city,
            state: event.state,
            zip_code: event.zip_code,
        };
        setEditFormData(formValues)
    };

    const handleCancelClick = () => { 
        setEditEventId(null);
    };
    
    

    // const handleRsvpButton = (event) => {
    //     event.preventDefault(); 
    //     const [status, useStatus] = useState(false);
    
    //     function rsvp() {
    //         setStatus(!status);
    //     }
        
    //     return ( 
    //         <button onClick={rsvp} className={'toggle--button '+ 
    //         (status ? 'toggle--Like': 'toggle--Unlike')}>
    //             {status ? 'YES' :'RSVP'}
    //         </button>
    //     );
    // }

    return (
        <div className="container-1">
           <h3>Upcoming Events</h3>
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    {/* <thead>
                        <tr className='title-1'>Title</tr>
                        <tr className='title-1'>Description</tr>
                        <tr className='title-1'>Month</tr>
                        <tr className='title-1'>Day</tr>
                        <tr className='title-1'>Year</tr>
                        <tr className='title-1'>Time</tr>
                        <tr className='title-1'>Street Address</tr>
                        <tr className='title-1'>City</tr>
                        <tr className='title-1'>State</tr>
                        <tr className='title-1'>Zip Code</tr>
                    </thead> */}

                    {props.events.map((event) => (
                        <Fragment>
                            {editEventId === event.id ?
                        ( <MEventsEditRow
                            editFormData={editFormData}
                            handleEditFormChange={handleEditFormChange}
                            handleCancelClick={handleCancelClick} /> ) :
                        ( <MEventsRoR
                            event={event}
                            // handleRsvpButton={handleRsvpButton}
                            // handleEditClick={handleEditClick} 
                            />
                            )
                        }  
                        </Fragment>
                    ))}
                <button className="add-btn" type="submit">Add</button>
                </table>
                
                </form>
                        <MapComponent></MapComponent>

        </div> 
    );


}


export default MEvents;

