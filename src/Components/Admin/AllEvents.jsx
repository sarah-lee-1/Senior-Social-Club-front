import { UseState, Fragment } from "react";
import AllEventsRoR from './AllEventsRoR';
import AllEventsEditRow from './AllEventsEditRow;'

const AllEvents = (props) => {
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


    const [addFormData, setAddFormData] = useState({
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

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newFormData = {...addFormData};
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    const handleEditFormChange = (event) =>{
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value; 

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    };

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newEvent = {
        id: id,
        title: title,
        description: addFormData.description,
        month: addFormData.month,
        day: addFormData.day,
        year: addFormData.year,
        time: addFormData.time,
        street: addFormData.street,
        city: addFormData.city,
        state: addFormData.state,
        zip_code: addFormData.zip_code,
        };
        const newEvents = [props.events, newEvent];
        setEvents(newEvents);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();
        console.log("here it is  " + editEventId)
        const editedEvent = {
            id: editEventId,
            title: title,
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
        newEvents[index] = editEvent;

        setEvents(newEvents);
        setEditEventId(null);
        props.updateEvent(editedEvent);
    };

    const handleEditClick = (event, event) =>{
        event.preventDefault();
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

    const handleDeleteClick = (eventId) => {
        const newEvents = [...props.events];
        const index =props.events.findIndex((event)=> event.id === eventId);
        newEvents.splice(index, 1);
        setEvents(newEvents);
    };

    return (
       <div className="container-1">
           <h2>Event Directory</h2>
        <form onSubmit={handleEditFormSubmit}>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Year</th>
                    <th>Time</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </thead>

                {props.events.map((event) => (
                    <Fragment>
                        {editEventId === event.id ?
                    ( <AllEventsEditRow
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick} /> ) :
                    ( <AllEventsRoR
                        event={event}
                        handleEditClick={handleEditClick}
                        handleDeleteClick={handleDeleteClick} />)
                    }  
                    </Fragment>
                ))}
            </table>
        </form>
        <h3>Add an Event</h3>
            <form onSubmit={handleAddFormSubmit}>
                <input
                name='title' 
                type='text'
                required='required'
                placeholder='Enter title...'
                onChange={handleAddFormChange}
                />
                <input
                name='description' 
                type='text'
                required='required'
                placeholder='Enter description...'
                onChange={handleAddFormChange}
                />
                <input
                name='month' 
                type='text'
                required='required'
                placeholder='Enter month...'
                onChange={handleAddFormChange}
                />
                <input
                name='day' 
                type='text'
                required='required'
                placeholder='Enter day...'
                onChange={handleAddFormChange}
                />
                <input
                name='year' 
                type='text'
                required='required'
                placeholder='Enter year...'
                onChange={handleAddFormChange}
                />
                <input
                name='time' 
                type='text'
                required='required'
                placeholder='Enter time...'
                onChange={handleAddFormChange}
                />
                <input
                name='street' 
                type='text'
                required='required'
                placeholder='Enter address...'
                onChange={handleAddFormChange} />

                <input  
                name='city'
                type='text'
                required='required'
                placeholder='Enter city...'
                onChange={handleAddFormChange} />

                <input
                name='state'
                type='text' 
                required='required'
                placeholder='Enter state'
                onChange={handleAddFormChange} />
            
                <input
                name='zip_code' 
                type='text' 
                required='required'
                placeholder='Enter zip code...'
                onChange={handleAddFormChange} />
                <button type="submit">Add</button>

            </form>


       </div> 
    );


}


export default AllEvents;

