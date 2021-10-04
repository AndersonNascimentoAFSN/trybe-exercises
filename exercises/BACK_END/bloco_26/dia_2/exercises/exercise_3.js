// Reescreva o código do exercício anterior para que utilize async/await.

const promise = require('./exercise_1');

const randomNumberArray = (qty) => {
  const array = [];
  for(i = 1; i <= qty; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    array.push(randomNumber);
  }
  return array;
}

const consumePromise = async () => {
  const [a, b, c] = randomNumberArray(3);
  try {
    const result = await promise(a, b, c);
    console.log(result);
  } catch(err) {
    console.error(err.message)
  }
}

consumePromise();
