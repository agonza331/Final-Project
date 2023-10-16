import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAttraction = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [attraction, setAttraction] = useState({
    name: '',
    about: '',
    location: '',
  });

  useEffect(() => {
    // Fetch the attraction data to prepopulate the form
    const fetchAttractionData = async () => {
      try {
        const response = await axios.get(`https://64f4f19b932537f4051acd19.mockapi.io/attractions/${id}`);
        setAttraction(response.data);
      } catch (error) {
        console.error('Error fetching attraction data: ', error);
      }
    };

    fetchAttractionData();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAttraction({ ...attraction, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the attraction data on the server
      await axios.put(`https://64f4f19b932537f4051acd19.mockapi.io/attractions/${id}`, attraction);

      // Navigate back to the attractions list or another route
      navigate('/read');
    } catch (error) {
      console.error('Failed to update attraction: ', error);
    }
  };

  return (
    <div>
      <h1>Edit Attraction</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={attraction.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="about"
          placeholder="About"
          value={attraction.about}
          onChange={handleInputChange}
          required
        />
        <input
          type="url"
          name="location"
          placeholder="Location"
          value={attraction.location}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditAttraction;
