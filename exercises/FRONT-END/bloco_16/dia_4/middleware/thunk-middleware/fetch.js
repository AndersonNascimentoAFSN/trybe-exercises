const url = 'https://api.mercadolibre.com/users/';
fetch(url)
  .then((response) => {
    if(!response.ok) {
      throw Error('could not fetch the data for that resource');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch(error => {
    console.log(error.message);
  })
  