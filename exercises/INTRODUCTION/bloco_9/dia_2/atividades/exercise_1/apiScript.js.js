// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  // Adicionar código aqui!
  fetch(API_URL, myObject)
  .then((response) => response.json())
  .then((data) => document.getElementById('jokeContainer').textContent = data.joke);
};

const getJoke = () => {
  const promise = new Promise((resolve, reject) => {
    const array = Array.from(
      { length: 10}, () => Math.floor(Math.random() * 50) + 1
      );
    const sum = array.map((element) => element * element).reduce((acc, curr) => acc + curr);
    (sum < 8000) ? resolve(sum) : reject();
  });
  promise
  .then((sum) => console.log([2, 3, 5, 10].map((Number) => sum / Number)))
  .then((array) => array.reduce((number, acc) => number + acc), 0)
  .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
  
}; 

getJoke();

window.onload = () => fetchJoke();