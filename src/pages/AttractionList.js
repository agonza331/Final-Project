import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import Delete from '../components/Delete'; // Import the Delete component
import { useNavigate } from 'react-router-dom';
import '../pages/AttractionList.css';
import EditAttraction from '../components/EditForm';

const AttractionsList = () => {
  const [attractions, setAttractions] = useState([]);
  const navigate = useNavigate();
  const [editingAttraction, setEditingAttraction] = useState(null);

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
    setAttractions((prevAttractions) => [...prevAttractions, newAttraction]);
  };

  const handleDeleteAttraction = (id) => {
    setAttractions((prevAttractions) => prevAttractions.filter((attraction) => attraction.id !== id));
  };

  return (
    <div className='list'>
      <h1 className="h1">Where Should I Visit?</h1>
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
                <Delete attraction={attraction} onDelete={handleDeleteAttraction} /> {/* Pass the attraction and onDelete handler to Delete */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AttractionsList;
