import {
  USER_FETCH_ERROR,
  USER_FETCH_SUCCESS,
  USER_FETCH_STARTED,
  userFetchError,
  userFetchStarted,
  userFetchSuccess, } from '../actions/user.js';

export const userFetch = (token) => (dispatch) => {

  fetch( 
    'https://dogsapi.origamid.dev/json/api/user',
    {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  )
  .then((response) => {
    if(!response.ok) {
      throw Error('Recurso da API não encontrado.');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    dispatch(userFetchStarted());
    dispatch(userFetchSuccess(data));
  })
  .catch((error) => {
    dispatch(userFetchError(error.message));
  });
  
}


const INITIAL_STATE = {
  isLoading: false,
  data: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
  case USER_FETCH_STARTED:
    return {...state, isLoading: true };
  case USER_FETCH_SUCCESS:
    return { isLoading: false, error: false, data: action.payload };
  case USER_FETCH_ERROR:
    return { ...state, isLoading: false, error: action.payload };
  default:
    return state;
  }
}

export default userReducer;
