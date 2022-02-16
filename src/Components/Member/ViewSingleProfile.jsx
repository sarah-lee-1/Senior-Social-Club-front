import React, { Fragment, useState } from 'react';

const ViewSingleProfile = (props) => {

    const [id, setId] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let searchMember = {
            id: id
        
        }
        console.log(searchMember);
        props.searchForMember(searchMember.Id);
    }

    return (

        <Fragment>
            {/* <div>
                <script type="text/javascript">
                    form.getElementById("myButton").onclick = function () {
                    location.href = "__member url___";};
                </script> 
            </div> */}

            <div>
                <h1>Member Profile</h1>
            </div>
            <div>
                <h2>Form</h2>
                <form>
                    <label>Member Id</label>
                    <input type='id' onChange={(event) => setId(event.target.value)} value={id} />
                    <label>First Name</label>
                    <input type='name' onChange={(event) => setFirstName(event.target.value)} value={firstName}/>
                    <label>Middle Name</label>
                    <input type='name' onChange={(event) => setMiddleName(event.target.value)} value={middleName}/>
                    <label>Last Name</label>
                    <input type='name' onChange={(event) => setLastName(event.target.value)} value={lastName}/>
                    <label>Email</label>
                    <input type='email' onChange={(event) => setEmail(event.target.value)} value={email}/>
                    <label>Address</label>
                    <input type='address' onChange={(event) => setAddress(event.target.value)} value={address}/>
                    <label>City</label>
                    <input type='city' onChange={(event) => setCity(event.target.value)} value={city}/>
                    <label>State</label>
                    <input type='state' onChange={(event) => setState(event.target.value)} value={state}/>
                    <label>Zip Code</label>
                    <input type='zip_code' onChange={(event) => setZipCode(event.target.value)} value={zipCode}/>
                    <label>Member Status</label>
                    <input type='status' onChange={(event) => setIsActive(event.target.value)} value={isActive}/>
                    <label>Balance</label>
                    <input type='balance' onChange={(event) => setBalance(event.target.value)} value={balance}/>
                    {/* <button onclick="___member url__">Close</button> */}
                </form>
            </div>
        </Fragment>
    )
}

export default ViewSingleProfile