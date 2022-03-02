import React from 'react';

const AllEventsEditRow = ({ editFormData, handleEditFormChange, handleCancelClick }) => {
    return (
        <tr>
            <td>
                <input  
                name='title'
                type='text' 
                required='required'
                placeholder='Enter title'
                value={editFormData.title}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input  
                name='description'
                type='text' 
                required='required'
                placeholder='Enter description'
                value={editFormData.description}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input  
                name='month'
                type='text' 
                required='required'
                placeholder='Enter month'
                value={editFormData.month}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input  
                name='day'
                type='text' 
                required='required'
                placeholder='Enter day'
                value={editFormData.day}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input  
                name='year'
                type='text' 
                required='required'
                placeholder='Enter year'
                value={editFormData.year}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input  
                name='time'         
                type='text' 
                required='required'
                placeholder='Enter start time...'
                value={editFormData.time}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <input  
                name='street' 
                type='text'
                required='required'
                placeholder='Enter address...'
                value={editFormData.street}
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
                name="zip_code"
                type='text' 
                required='required'
                placeholder='Enter zip code...'
                value={editFormData.zip_code}
                onChange={handleEditFormChange} />
            </td>
            <td>
                <button type="submit">Save</button>

                <button type="button"
                onClick={handleCancelClick}>Cancel</button>
            </td>
        </tr>
    );
};

export default AllEventsEditRow; 


