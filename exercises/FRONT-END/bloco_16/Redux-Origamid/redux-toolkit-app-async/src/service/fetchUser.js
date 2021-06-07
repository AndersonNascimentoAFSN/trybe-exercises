import { 
  fetchUserStated, fetchUserSuccess, fetchError 
} from '../reducers/user';

export const fetchUser = (token) => (dispatch) => {
  fetch('https://dogsapi.origamid.dev/json/api/user', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token,
    },
  })
  .then((response) => {
    if(!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then(data => {
    dispatch(fetchUserStated());
    return dispatch(fetchUserSuccess(data));
  })
  .catch((error) => {
    return dispatch(fetchError(error.message));
  });
}