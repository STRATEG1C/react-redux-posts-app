import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false
};

export const fetchPosts = createAsyncThunk('FETCH_POSTS', async () => {
  const res = await axios.get('http://localhost:3000/posts');
  return res.data;
});

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    toggleLoading: state => {
      state.isLoading = !state.isLoading;
    }
  },
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.isError = true;
      state.isLoading = false;
    }
  }
});

export const { toggleLoading } = postSlice.actions;

export const selectAllPosts = state => state.items;

export default postSlice.reducer;
