import { createSlice } from '@reduxjs/toolkit';

const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      ...config.initialState,
    },

    reducers: {
      fetchStated(state) {
        return { ...state, loading: true };
      },
      fetchSuccess(state, action) {
        return { loading: false, data: action.payload, error: null };
      },
      fetchError(state, action) {
        return { loading: false, data: null, error: action.payload };
      },
      ...config.reducers,
    }
  });

  const { fetchStated, fetchSuccess, fetchError } = slice.actions;
  
  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStated());
      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      const data = response.json();
      return dispatch(fetchSuccess(data));
    }
    catch(error) {
      return dispatch(fetchError(error.message));
    }
  };

  return { ...slice, asyncAction }
}

export default createAsyncSlice;
