import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import EditAttraction from '../components/EditForm'; // Assuming you have the EditAttraction component
import Delete from '../components/Delete';

const AttractionsList = () => {
  const [attractions, setAttractions] = useState([]);

  useEffect(() => {
    const fetchAttractions = async () => {
      try {
        const response = await axios.get('https://64f4f19b932537f4051acd19.mockapi.io/attractions');
        setAttractions(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchAttractions();
  }, []);

  const handleAttractionAdded = (newAttraction) => {
    // Update the 'attractions' state with the new attraction
    setAttractions((prevAttractions) => [...prevAttractions, newAttraction]);
  };

  const handleDeleteAttraction = (id) => {
    // Remove the attraction with the given id from the 'attractions' state
    setAttractions((prevAttractions) => prevAttractions.filter((attraction) => attraction.id !== id));
  };

  const [editingAttraction, setEditingAttraction] = useState(null);

  return (
    <div>
      <h3>Where Should I Visit?</h3>
      <Form onAttractionAdded={handleAttractionAdded} /> 
      <table className="tableWrap">
        <thead> 
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attractions.map((attraction) => (
            <tr key={attraction.id}>
              <td>{attraction.name}</td>
              <td>{attraction.about}</td>
              <td>
                <a href={attraction.location} target="_blank" rel="noopener noreferrer">
                  Location
                </a>
              </td>
              <td>
                <button
                  className='edit'
                  onClick={() => setEditingAttraction(attraction)}>
                  Edit
                </button>
                <Delete attraction={attraction} onDelete={handleDeleteAttraction} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttractionsList;
