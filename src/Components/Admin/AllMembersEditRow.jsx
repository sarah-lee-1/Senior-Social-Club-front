import React from 'react'; 
    
const AllMembersEditRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
            <input 
                name='first_name'
                type='text'
                required='required'
                placeholder='Enter first name...'
                value={editFormData.first_name}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                name='middle_name'
                type='text'
                required='required'
                placeholder='Enter middle name...'
                value={editFormData.middle_name}
                onChange={handleEditFormChange} />
            </td> 
            <td>
                <input
                name='last_name'
                type='text' 
                required='required'
                placeholder='Enter last name...'
                value={editFormData.last_name}                 
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input 
                name='email'         
                type='text' 
                required='required'
                placeholder='Enter email...'
                value={editFormData.email}
                onChange={handleEditFormChange} />
            </td>
            <td> 
                <input
                name='address' 
                type='text'
                required='required'
                placeholder='Enter address...'
                value={editFormData.address}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input  
                name='city'
                type='text'
                required='required'
                placeholder='Enter city...'
                value={editFormData.city}
                onChange={handleEditFormChange} />
            </td> 
            <td>
                <input
                name='state'
                type='text' 
                required='required'
                placeholder='Enter state'
                value={editFormData.state}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                name='zip_code' 
                type='text' 
                required='required'
                placeholder='Enter zip code...'
                value={editFormData.zip_code}
                onChange={handleEditFormChange} />
            </td> 
            <td>
                <input 
                name='is_active' 
                type='integer' 
                required='required'
                placeholder='Is member active? '
                value={editFormData.is_active}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input
                name='balance' 
                type='integer' 
                required='required'
                placeholder='Enter balance'
                value={editFormData.balance}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <button type='submit'
                >Save</button>
                <button type='button' 
                onClick={handleCancelClick}>Cancel</button>

            </td>
        </tr>
    );
};

export default AllMembersEditRow; 
