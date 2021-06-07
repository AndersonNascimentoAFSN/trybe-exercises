import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'token',
  initialState: { 
    loading: false,
    data: null,
    error: null, 
  },
  reducers: {
    fetchStarted(state) {
      return { ...state, loading: true };
    },
    fetchSuccess(state, action) {
      return { loading: false, data: action.payload, error: null };
    },
    fetchError(state, action) {
      return { loading: false, data: null, error: action.payload };
    },
  },
});

export const { fetchStarted, fetchSuccess, fetchError } = slice.actions;
export default slice.reducer;
