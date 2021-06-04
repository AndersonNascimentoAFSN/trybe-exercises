export const TOKEN_FETCH_STARTED = 'token/FETCH_STARTED';
export const TOKEN_FETCH_SUCCESS = 'token/FETCH_SUCCESS';
export const TOKEN_FETCH_ERROR = 'token/FETCH_ERROR';

export const tokenFetchStarted = () => ({
  type: TOKEN_FETCH_STARTED,
});

export const tokenFetchSuccess = (payload) => ({
  type: TOKEN_FETCH_SUCCESS,
  payload,
  localStorage: 'token',
});

export const tokenFetchError = (payload) => ({
  type: TOKEN_FETCH_ERROR,
  payload,
});