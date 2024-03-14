import React, { useState } from 'react';
import axios from 'axios';
import '../assets/eventForm.css';

const EventForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    description: '',
    location: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const eventData = {
      title: formData.title,
      date: formData.date,
      description: formData.description,
      location: formData.location,
    };

    try {
      // http://mrhaydenn.us.to:8000/api/makeEvent/
      // http://127.0.0.1:8000/api/makeEvent/
      const response = await axios.post('http://127.0.0.1:8000/api/makeEvent/', eventData);
      console.log('Event Created', response.data);
      setSubmitted(true);

      setFormData({
        title: '',
        date: '',
        description: '',
        location: '',
      });
    } catch (error) {
      console.error('Event Creation failed', error);
    }
  };


  return (
    <div className='eventForm'>
      <h2>Upload Event</h2>
      {submitted && <div className="success-message">Event submitted successfully!</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Submit Event</button>
      </form>
    </div>
  );
};

export default EventForm;

