import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  registeredUsers: [],
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      // Check if username or email already exists
      const userExists = state.registeredUsers.some(
        user => user.username === action.payload.username || user.email === action.payload.email
      );
      
      if (userExists) {
        state.error = 'Username or email already exists';
      } else {
        state.registeredUsers.push(action.payload);
        state.error = null;
      }
    },
    loginUser: (state, action) => {
      const { username, password } = action.payload;
      const user = state.registeredUsers.find(
        user => user.username === username && user.password === password
      );
      
      if (user) {
        state.isAuthenticated = true;
        state.user = {
          firstName: user.firstName,
          lastName: user.lastName,
          username: user.username,
          email: user.email,
        };
        state.error = null;
      } else {
        state.error = 'Invalid username or password';
      }
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const { registerUser, loginUser, logoutUser, clearError } = authSlice.actions;
export default authSlice.reducer;