// import { useReducer } from "react";
// import "./styles.css"; 

const AllMembers = (props) => {
    return (
        <div class="box-1">
            <h3>Membership Directory</h3>
        <table>
            <thead>
            <tr>
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
                {props.parentEntries.map((member, index) => {
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
                        </tr>
                    );
                })}

            </tbody>
        </table> 
        </div>
    )
}

export default AllMembers; 
