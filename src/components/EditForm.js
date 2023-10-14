import React, { useState, useEffect } from 'react';
import { Route, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import axios from 'axios';

function EditAttraction() {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [id, setID] = useState(null);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    setID(localStorage.getItem('ID'));
    setName(localStorage.getItem('Name'));
    setAbout(localStorage.getItem('About'));
    setLocation(localStorage.getItem('Location'));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Update the state based on the input field
    if (name === 'name') {
      setName(value);
    } else if (name === 'about') {
      setAbout(value);
    } else if (name === 'location') {
      setLocation(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the attraction data on the server
      const updatedAttraction = {
        name,
        about,
        location,
      };

      // Send the updated data to an API for attraction update
      await axios.put(`https://64f4f19b932537f4051acd19.mockapi.io/attractions/${id}`, updatedAttraction);

      // Navigate to a specific route after updating (replace '/read' with your desired route)
      navigate('/read');
    } catch (error) {
      console.error(`Failed to update attraction: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="about"
        placeholder="About"
        value={about}
        onChange={handleInputChange}
      />
      <input
        type="url"
        name="location"
        placeholder="Location"
        value={location}
        onChange={handleInputChange}
      />
      <button type="submit">Update</button>
    </form>
  );
}

export default EditAttraction;
