import React from "react";
import { api } from '../rest/MockAPI'; 

function Delete({ attraction, onDelete }) {
  const deleteAttraction = async (id) => {
    try {
      console.log(`Deleting attraction with ID: ${id}`);
      await api.delete(`attractions/${id}`);
      console.log(`Attraction with ID ${id} deleted successfully`);
      onDelete(id);
    } catch (error) {
      console.error('Error deleting attraction:', error);
      alert('Failed to delete the attraction. Please try again later.');
    }
  }

  return (
    <div>
      <button onClick={() => deleteAttraction(attraction.id)}>Delete</button>
    </div>
  );
}

export default Delete;
