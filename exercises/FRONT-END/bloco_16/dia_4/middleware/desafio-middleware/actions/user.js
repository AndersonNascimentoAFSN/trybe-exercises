export const USER_FETCH_STARTED = 'user/FETCH_STARTED';
export const USER_FETCH_SUCCESS = 'user/FETCH_SUCCESS';
export const USER_FETCH_ERROR = 'user/FETCH_ERROR';

export const userFetchStarted = () => ({
  type: USER_FETCH_STARTED,
});

export const userFetchSuccess = (payload) => ({
  type: USER_FETCH_SUCCESS,
  payload,
});

export const userFetchError = (payload) => ({
  type: USER_FETCH_ERROR,
  payload,
});