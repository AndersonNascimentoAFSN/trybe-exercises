// import { FETCH_STARTED } from '../actions/index.js';
// import { FETCH_SUCCESS } from '../actions/index.js';
// import { FETCH_ERROR } from '../actions/index.js';

function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  }
  catch(error) {
    return initial;
  }
}

const INITIAL_STATE = {
  loading: false,
  data: getLocalStorage('data', null),
  error: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'FETCH_STARTED':
      return {...state, loading: true };
    case 'FETCH_SUCCESS':
      return { loading: false, data: action.payload, error: null };
    case 'FETCH_ERROR':
      return { data: null, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default reducer;
