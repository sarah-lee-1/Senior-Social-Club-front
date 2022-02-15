import { useReducer } from "react";

const AllEvents = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Month</th>
                    <th>Day</th>
                    <th>Tear</th>
                    <th>Time</th>
                    <th>Street Address</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Zip Code</th>
                </tr>
            </thead>

            <tbody>
                {props.parentEntries.map((event, index) => {
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
                        </tr>
                    );
                })}
            </tbody>
        </table>

    )
}

export default AllEvents;