import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/gallery.css';

const Gallery = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get_images/', { responseType: 'text' })
            .then(response => {
                const decodedData = decodeURIComponent(escape(response.data));
                const parsedData = JSON.parse(decodedData);
                setEvents(parsedData);
            })
            .catch(error => {
                console.error('Error fetching uploads:', error);
            });
    }, []);

    return (
        <div className="Table">
            <table>
                <thead>
                    <tr>
                        <th>Selected Building</th>
                        <th>Description</th>
                        <th>Images</th>
                        <th>Review</th>
                    </tr>
                </thead>
                <tbody>
                    {events.map(upload => (
                        <tr key={upload.description}>
                            <td>{upload.selectedBuilding}</td>
                            <td>{upload.description}</td>
                            {/* Assuming 'image' contains URL to image */}
                            <td><img src={upload.image} alt="Event" className="event-image" /></td>
                            <td>
                                <button className='approve-btn'>Approve</button>
                                <button className='deny-btn'>Deny</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Gallery;
