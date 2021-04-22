const numbers = (array) => {
  return array.every((element) => typeof element === 'number');
}

module.exports = numbers;
