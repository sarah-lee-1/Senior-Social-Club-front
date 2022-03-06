import { useReducer} from "react";
// import { Link } from 'react-router-dom'; 


const EditAM = (props) => {
    console.log(props.members)
    return (
        <div className="box-3">
            <h3>Membership Directory</h3>
        <table>
            <thead>
            <tr>
                <th></th>
                <th>First Name</th>
                <th>Middle Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
                <th>Active Status</th>
                <th>Balance</th>
            </tr>
            </thead>

            <tbody>
                {props.members.map((member, index) => {
                    return (
                        <tr key={index}>
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

                            {/* <li>
                                <Link to="/EditAM">Update</Link>
                            </li> */}
                        </tr>

                    );
                })}

            </tbody>
        </table> 
        </div>
    )
} 


export default EditAM; 



// {/* <td>
// <button type='submit'>Save</button>
// <button type='button' 
// onclick={handleCancelClick}>Cancel</button>

// </td> */}