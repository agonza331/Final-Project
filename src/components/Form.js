import React, { useState } from 'react';
import axios from 'axios';

function AddAttraction({onAttractionAdded }) {
  const [formData, setFormData] = useState({
    name: '',
    about: '',
    location: '',
  });

  const { name, about, location } = formData; // Destructure values from formData

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://64f4f19b932537f4051acd19.mockapi.io/attractions',
        formData
      );
      onAttractionAdded(response.data); // Update the list with the new attraction

      setFormData({
        name: '',
        about: '',
        location:'',
      });
    } catch (error) {
      console.error('Error adding attraction:', error);
    }
  };

  return (
    <div className='add'>
      <h4>Add a new attraction in CDMX</h4>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={handleInputChange}
          required // Add the "required" attribute for basic validation
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
          Add
        </button>
      </form>
    </div>
  );
}

export default AddAttraction;;



// const [name, setName] = useState('');
// const [about, setAbout] = useState('');
// const [location, setLocation] = useState('');

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (name) {
//     const newPlace = { name, about, location };
//     try {
//       const response = await api.post('/places', newPlace);
//       if (response) {
//         console.log('Successfully added a new place');
//       }
//     } catch (error) {
//       console.error(`Failed to add a new place: ${error.message}`);
//     }
//     // Clear the input fields
//     setName('');
//     setAbout('');
//     setLocation('');
//   } else {
//     console.log('Invalid input');
//   }
// }