import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import '../pages/AttractionList.css';
import UpdateAttraction from '../components/UpdateAttraction';
import DeleteAttraction from '../components/Delete';
import Date from '../components/Date'; // Import the Date component


const AttractionsList = () => {
  const [attractions, setAttractions] = useState([]);
  const [editingAttractionId, setEditingAttractionId] = useState(null);

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

  const handleAttractionDeleted = (attractionId) => {
    // Remove the deleted attraction from the state
    setAttractions((prevAttractions) =>
      prevAttractions.filter((attraction) => attraction.id !== attractionId)
    );
  };
  
  const toggleEditAttraction = (attractionId) => {
    setEditingAttractionId(attractionId);
  };  
  const handleAttractionUpdated = (updatedAttraction) => {
    // Update the attraction in state
    setAttractions((prevAttractions) =>
      prevAttractions.map((attraction) =>
        attraction.id === updatedAttraction.id ? updatedAttraction : attraction
      )
    );
      setEditingAttractionId(null);
  };  

  const toggleCheckmark = (attractionId) => {
    setAttractions((prevAttractions) =>
      prevAttractions.map((attraction) =>
        attraction.id === attractionId ? { ...attraction, checked: !attraction.checked } : attraction
      )
    );
  };

  // Load checkmark status from local storage on component mount
  useEffect(() => {
    const savedAttractions = JSON.parse(localStorage.getItem('attractions')) || [];
    setAttractions(savedAttractions);
  }, []);

  // Save checkmark status to local storage whenever attractions change
  useEffect(() => {
    localStorage.setItem('attractions', JSON.stringify(attractions));
  }, [attractions]);

  return (
    <div className="list">
      <h1 className="h1">Where To Go?</h1>
      <Form onAttractionAdded={handleAttractionAdded} />
      <table className="tableWrap">
        <thead>
          <tr>
            <th>Visted</th>
            <th>Date</th>
            <th>Name</th>
            <th>Description</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {attractions.map((attraction) => (
            <tr key={attraction.id}>
               <td>
                <input
                  type="checkbox"
                  checked={attraction.checked}
                  onChange={() => toggleCheckmark(attraction.id)}
                />
              </td>
              <td><Date/></td>
              <td>{attraction.name}</td>
              <td>{attraction.about}</td>
              <td>
                <a href={attraction.location} target="_blank" rel="noopener noreferrer">
                  Location
                </a>
              </td>
              <td>
                {editingAttractionId === attraction.id ? (
                  <UpdateAttraction attractionId={attraction.id} onUpdate={handleAttractionUpdated} />
                ) : (
                  <button onClick={() => toggleEditAttraction(attraction.id)} className='edit'>Edit</button>
                )}
                <DeleteAttraction attractionId={attraction.id} onDelete={handleAttractionDeleted} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttractionsList;
