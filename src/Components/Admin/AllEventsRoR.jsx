import React from 'react';

const AllEventsRoR = ({ event, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={event.id}>
            <td>{event.title}</td>
            <td>{event.description}</td>
            <td>{event.month}</td>
            <td>{event.day}</td>
            <td>{event.year}</td>
            <td>{event.time}</td>
            <td>{event.street}</td>
            <td>{event.city}</td>
            <td>{event.state}</td>
            <td>{event.zip_code}</td>
            <td>
                <button
                type="button"
                onClick={(edit) => handleEditClick(edit, event)}
                >Edit</button>
            </td>
            <td>
                <button 
                type="button"
                onClick={() => handleDeleteClick(event.id)}
                >Delete</button>
            </td>
        </tr>
    );
};   

export default AllEventsRoR;
