import React from 'react';

const MEventsRoR = ({ event, handleEditClick, handleDeleteClick }) => {
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
                {/* CURRENTLY THIS IS AN EDIT BUTTON */}
                <button
                className="ed-btn"
                type="button"
                onClick={(edit) => handleEditClick(edit, event)}
                >RSVP</button>
            </td>
        </tr>
    );
};   

export default MEventsRoR;
