import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Form({ onAttractionAdded, attraction }) {
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    location: '',
  });

  useEffect(() => {
    if (attraction) {
      setFormData(attraction);
    }
  }, [attraction]);

  const { name, about, location } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (attraction) {
        // Edit mode: Send a PUT request to update the attraction
        await axios.put(`https://64f4f19b932537f4051acd19.mockapi.io/attractions/${attraction.id}`, formData);
      } else {
        // Add mode: Send a POST request to create a new attraction
        const response = await axios.post('https://64f4f19b932537f4051acd19.mockapi.io/attractions', formData);
        onAttractionAdded(response.data);
      }

      // Reset the form after submission
      setFormData({
        name: '',
        about: '',
        location: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='add'>
      <h4>{attraction ? 'Edit' : 'Add'} an attraction in CDMX</h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={handleInputChange}
          required
        />
        <input
          type='text'
          name='about'
          placeholder='About'
          value={about}
          onChange={handleInputChange}
          required
        />
        <input
          type='url'
          name='location'
          placeholder='Address Link'
          value={location}
          onChange={handleInputChange}
          required
        />
        <button type='submit' className='btn'>
          {attraction ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
}

export default Form;
