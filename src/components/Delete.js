import React from 'react';
import { api } from '../rest/MexicoApi';

function Delete({ attraction, onDelete }) {
  const deleteAttraction = async (id) => {
    try {
      // Assuming your API.delete function is correctly implemented
      await api.delete(`attractions/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Error deleting attraction:', error);
      // Display a user-friendly error message to the user
      alert('Failed to delete the attraction. Please try again later.');
    }
  };  

  return (
    <div>
      <button onClick={() => deleteAttraction(attraction.id)}>Delete</button>
    </div>
  );
}

export default Delete;
