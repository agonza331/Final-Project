const API_URL = "https://64f4f19b932537f4051acd19.mockapi.io/attractions";

class API {
  constructor() {
    this.base_url = API_URL; 
  }

  async post(attractions) {
    try {
      const resp = await fetch(this.base_url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attractions),
      });

      if (!resp.ok) {
        throw new Error(`Failed to add a new place: ${resp.status}`);
      }

      return await resp.json();
    } catch (error) {
      console.error('Oops, looks like adding a new place had an issue.', error);
      throw error;
    }
  }

  async get() {
    try {
      const resp = await fetch(this.base_url);

      if (!resp.ok) {
        throw new Error(`Failed to fetch places: ${resp.status}`);
      }

      return await resp.json();
    } catch (error) {
      console.error('Oops, looks like fetching places had an issue.', error);
      throw error;
    }
  }

  async put(attractions) { // Fixed the parameter name to 'attractions'
    try {
      const resp = await fetch(`${this.base_url}/${attractions._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(attractions),
      });

      if (!resp.ok) {
        throw new Error(`Failed to update place: ${resp.status}`);
      }

      return await resp.json();
    } catch (error) {
      console.error('Oops, looks like updating places had an issue.', error);
      throw error;
    }
  };

  async delete(attractions) {
    try {
      const response = await fetch(`${this.base_url}/${attractions._id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete resource: ${response.status}`);
      }

      return true; // Indicate that the resource was successfully deleted
    } catch (error) {
      console.error('Error deleting resource:', error);
      throw error;
    }
  }
  
}

export const api = new API();
