import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

const UpdateAttraction = ({ attractionId, onUpdate }) => {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    // Fetch the attraction data to prepopulate the form
    const fetchAttractionData = async () => {
      try {
        const response = await axios.get(`https://64f4f19b932537f4051acd19.mockapi.io/attractions/${attractionId}`); // Use `attractionId` instead of `id`
        const attractionData = response.data;
        // Set the fetched data into state variables
        setName(attractionData.name);
        setAbout(attractionData.about);
        setLocation(attractionData.location);
      } catch (error) {
        console.error('Error fetching attraction data: ', error);
      }
    };

    fetchAttractionData();
  }, [attractionId]);

  const handleUpdate = () => {
    // Create an updatedAttraction object with the new data
    const updatedAttraction = {
      id: attractionId,
      name: name,
      about: about,
      location: location,
    };
    // Call the onUpdate function to update the parent component's state with the updated attraction
    onUpdate(updatedAttraction);
  };

  return (
    <div>
      <h5>Edit Attraction</h5>
      <form>
        <div>
          <label>Name:</label>
          <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea 
          value={about} 
          onChange={(e) => setAbout(e.target.value)} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" 
          value={location} 
          onChange={(e) => setLocation(e.target.value)} />
        </div>
        <button onClick={handleUpdate}>Update</button>
      </form>
    </div>
  );
};

export default UpdateAttraction;
