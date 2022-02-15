// import React, { useState } from 'react';

// const ViewRsvpMap = (props) => {

//     const [id, setId] = useState('');

//     function handleSubmit(event) {
//         event.preventDefault();
//         let searchRsvps = {
//             id: id
//         }
//             console.log(searchRsvps);
//             props.searchForRsvps(searchRsvps);
//     }

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>Title</th>
//                     <th>Description</th>
//                     <th>Month</th>
//                     <th>Day</th>
//                     <th>Year</th>
//                     <th>Time</th>
//                     <th>Street Address</th>
//                     <th>City</th>
//                     <th>State</th>
//                     <th>Zip Code</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {props.parentEntries.map((event, index) => {
//                     return (
//                         <tr>
//                             <td>{event.id}</td>
//                             <td>{event.title}</td>
//                             <td>{event.description}</td>
//                             <td>{event.month}</td>
//                             <td>{event.day}</td>
//                             <td>{event.year}</td>
//                             <td>{event.time}</td>
//                             <td>{event.street}</td>
//                             <td>{event.city}</td>
//                             <td>{event.state}</td>
//                             <td>{event.zip_code}</td>
//                         </tr>
//                     );
//                 })}
//             </tbody>
//         </table>
//     )
// }

// export default ViewRsvpMap; 