import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'contador',
  initialState: { count: 0 },
  reducers: {
    incrementar(state) {
      return { ...state, count: state.count + 1};
    },
    reduzir(state) {
      return { ...state, count: state.count - 1}; 
    },
  },
});

export const { incrementar, reduzir } = slice.actions;
export default slice.reducer;
