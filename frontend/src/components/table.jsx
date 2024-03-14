import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/table.css';

const Table = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        //http://127.0.0.1:8000/api/events/
        //http://mrhaydenn.us.to:8000/api/events/
        axios.get('http://127.0.0.1:8000/api/events/')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('Error fetching events:', error);
            });
    }, []);

    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Event Date</th>
                        <th>Event Location</th>
                        <th>Images</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(event => (
                        <tr key={event.title}>
                            <td>{event.title}</td>
                            <td>{event.description}</td>
                            <td>{event.date}</td>
                            <td>{event.location}</td>
                            <td>{event.image}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;