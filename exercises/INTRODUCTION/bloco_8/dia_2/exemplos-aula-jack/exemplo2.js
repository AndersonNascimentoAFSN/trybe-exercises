const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multiply = (numbers) => {
  const arr = [];

  // for (let index = 0; index < numbers.length; index += 1) {
  //   arr.push(numbers[index] * 3);
  // }
  numbers.forEach(element => arr.push(element * 3));

  return arr;
}

console.log(multiply(numbers));