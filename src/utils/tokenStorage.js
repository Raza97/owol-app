// Simple token storage utility
// In production, consider using @react-native-async-storage/async-storage or expo-secure-store

let authToken = null;

export const tokenStorage = {
  // Store token
  setToken: (token) => {
    authToken = token;
    // In production, store in AsyncStorage or SecureStore
    // AsyncStorage.setItem('authToken', token);
  },

  // Get token
  getToken: () => {
    return authToken;
    // In production, retrieve from AsyncStorage or SecureStore
    // return AsyncStorage.getItem('authToken');
  },

  // Remove token (logout)
  removeToken: () => {
    authToken = null;
    // In production, remove from AsyncStorage or SecureStore
    // AsyncStorage.removeItem('authToken');
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!authToken;
  }
};

export default tokenStorage;
