import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import history from '../../helpers/history';

const initialState = {
  user: null,
  isLoading: false,
  isError: false
};

export const login = createAsyncThunk('LOGIN', async ({ email, password }) => {
  // here some query to login user
  console.log(`Login user with ${email} and ${password}...`);

  const res = await axios.get('http://localhost:3000/currentUser');
  return res.data;
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: state => {
      state.user = null;
    },
    toggleLoading: state => {
      state.isLoading = !state.isLoading;
    }
  },
  extraReducers: {
    [login.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [login.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      history.push('/posts');
    },
    [login.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
    }
  }
});

export const { setUser, clearUser, toggleLoading } = authSlice.actions;

export const selectCurrentUser = state => state.user;

export default authSlice.reducer;
