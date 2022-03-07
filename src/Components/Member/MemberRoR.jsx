import React from 'react'

const MemberRoR = ({ member, handleEditClick, handleDeleteClick }) => {
    return (
        <tr key={member.id}>
            <td>{member.first_name}</td>
            <td>{member.middle_name}</td>
            <td>{member.last_name}</td>
            <td>{member.email}</td>
            <td>{member.address}</td>
            <td>{member.city}</td>
            <td>{member.state}</td>
            <td>{member.zip_code}</td>
            <td>{member.is_active}</td>
            <td>{member.balance}</td> 
            <td>
                <button
                    className="ed-btn"
                    type="button"
                    onClick={(event) => handleEditClick(event, member)}
                >Edit</button>
            </td>
        </tr>
    );

};

export default MemberRoR; 
