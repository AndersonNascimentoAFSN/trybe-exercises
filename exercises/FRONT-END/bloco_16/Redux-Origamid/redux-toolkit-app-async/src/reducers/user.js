import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    data: null,
    error: null, 
  },
  reducers: {
    fetchUserStated(state) {
      return {...state, loading: true};
    },
    fetchUserSuccess(state, action) {
      return {loading: false, data: action.payload, error: null};
    },
    fetchError(state, action) {
      return {loading: false, data: null, error: action.payload};
    }
  }
});

export const { fetchUserStated, fetchUserSuccess, fetchError } = slice.actions;

export default slice.reducer;
