import { 
  TOKEN_FETCH_ERROR,
  TOKEN_FETCH_SUCCESS,
  TOKEN_FETCH_STARTED,
  tokenFetchStarted,
  tokenFetchError,
  tokenFetchSuccess, } from '../actions/token.js';
import getLocalStorage from '../helpers/getLocalStorage.js'

export const tokenFetch = (user) => (dispatch) => {

  fetch( 
    'https://dogsapi.origamid.dev/json/jwt-auth/v1/token',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    }
  )
  .then((response) => {
    if(!response.ok) {
      throw Error('Recurso da API não encontrado.');
    }
    return response.json();
  })
  .then((token) => {
    dispatch(tokenFetchStarted());
    dispatch(tokenFetchSuccess(token.token));
  })
  .catch((error) => {
    dispatch(tokenFetchError(error.message));
  });
  
}

const INITIAL_STATE = { 
  isLoading: null,
  data: getLocalStorage('token', null),
  error: null,
};

const tokenReducer = (state = INITIAL_STATE, action) => {
  switch(action.type){
    case TOKEN_FETCH_STARTED:
      return {...state, isLoading: true };
    case TOKEN_FETCH_SUCCESS:
      return { isLoading: false, error: false, data: action.payload };
    case TOKEN_FETCH_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

export default tokenReducer;
