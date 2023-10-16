import React from 'react';
import axios from 'axios';

const DeleteAttraction = ({ attractionId, onDelete }) => {
  const handleDelete = async () => {
    try {
      // Send a DELETE request to your API to delete the attraction
      await axios.delete(`https://64f4f19b932537f4051acd19.mockapi.io/attractions/${attractionId}`);
      onDelete(attractionId); // Notify the parent component that the attraction was deleted
    } catch (error) {
      console.error('Error deleting attraction: ', error);
    }
  };

  return (
    <button className="delete" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteAttraction;

