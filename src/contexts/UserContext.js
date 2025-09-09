import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { tokenStorage } from '../utils/tokenStorage';

const UserContext = createContext();

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch user data when component mounts or when token changes
  useEffect(() => {
    const fetchUser = async () => {
      if (tokenStorage.isAuthenticated()) {
        try {
          const userData = await api.getCurrentUser();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
          // If token is invalid, clear it
          tokenStorage.removeToken();
          setUser(null);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    };

    fetchUser();
  }, []);

  // Update user data
  const updateUser = (userData) => {
    setUser(userData);
  };

  // Clear user data (logout)
  const clearUser = () => {
    setUser(null);
    tokenStorage.removeToken();
  };

  const value = {
    user,
    loading,
    updateUser,
    clearUser,
    isAuthenticated: !!user,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
