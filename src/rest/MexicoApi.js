const API_URL = "https://64f4f19b932537f4051acd19.mockapi.io/attractions";

class API {
  constructor() {
    this.API_URL = API_URL; // Corrected property name
  }

  async post(newPlace) {
    try {
      const resp = await fetch(this.API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlace),
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
      const resp = await fetch(this.API_URL);

      if (!resp.ok) {
        throw new Error(`Failed to fetch places: ${resp.status}`);
      }

      return await resp.json();
    } catch (error) {
      console.error('Oops, looks like fetching places had an issue.', error);
      throw error;
    }
  }

  async put(place) { // Fixed the parameter name to 'place'
    try {
      const resp = await fetch(`${this.API_URL}/${place._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(place),
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

  async delete(resource) {
    try {
      const response = await fetch(`${this.API_URL}/${resource}`, {
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
