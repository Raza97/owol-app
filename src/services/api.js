// API service for handling authentication and roles
const API_BASE_URL = 'https://owol.server.wave-soul.com'; // Replace with your actual API URL

// Import token storage
import { tokenStorage } from '../utils/tokenStorage';

// Generic API call function
const apiCall = async (endpoint, options = {}) => {
  try {
    const token = tokenStorage.getToken();
    
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...(token && { 'Authorization': `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API Call Error:', error);
    throw error;
  }
};

// API Functions
export const api = {
  // Get all available roles
  getRoles: async () => {
    return apiCall('/api/roles');
  },

  // Login with email and password
  login: async (email, password, roleId = null) => {
    const body = { email, password };
    
    // Include roleId if provided (for server-side validation)
    if (roleId) {
      body.roleId = roleId;
    }

    return apiCall('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },

  // Get current user data
  getCurrentUser: async () => {
    return apiCall('/api/me');
  },

  // Signup with name, email, password, and roleId
  signup: async (name, email, password, roleId) => {
    const body = { name, email, password, roleId };

    return apiCall('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify(body),
    });
  },
};

export default api;
