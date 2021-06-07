import { failedRequest, getImage, requestDog } from "../actions"

export function fetchDog() {
  return (dispatch) => {
    dispatch(requestDog());
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      if(!response.ok) {
        throw Error('Recurso não encontrado');
      }
      return response.json();
    })
    .then(
      (json) => dispatch(getImage(json)),
    )
    .catch((error) => {
      dispatch(failedRequest(error.message))
    });
  }
}
