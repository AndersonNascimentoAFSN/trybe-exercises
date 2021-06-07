import { fetchError, fetchStarted, fetchSuccess } from "../reducers/token";

export const fetchToken = (user) => async (dispatch) => {
  try {
    dispatch(fetchStarted());
    const response = await fetch(
      'https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    },
    );
    if(!response.ok) {
      throw Error(response.statusText);
    }
    const data = await response.json();
    return dispatch(fetchSuccess(data));
  }
  catch(error) {
    return dispatch(fetchError(error.message));
  }
};