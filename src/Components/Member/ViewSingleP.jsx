// import React, { useState } from 'react';


// const ViewSingleProfile = (props) => {

//     const [id, setId] = useState('');

//     function handleSubmit(event) {
//         event.preventDefault();
//         let searchMember = {
//             id: id
//         }
//             console.log(searchMember);
//             props.searchForMember(searchMember.Id);
//     }

//     return (
//             <form onSubmit={handleSubmit}>
//                 <label>Member Id</label>
//                 <input type='id' onChange={(event) => setId(event.target.value)} value={id}/>
//                 <button type='submit'>View Profile</button>
//             </form>
//     )

// }

// export default ViewSingleProfile