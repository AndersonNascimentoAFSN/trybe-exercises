const repeat = (number, action) => {
  for (let count = 0; count <= number; count += 1) {
    action(count);
  }
};

// repeat(5, console.log);

// repeat(3, (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is event');
//   }
// });

const isEven = (number) => {
  if (number % 2 === 0) {
    console.log(number, 'is even');
  }
}

const isOdd = (number) => {
  if ((number % 2) > 0) {
    console.log(number, 'is odd');
  }
};

// repeat(3, isEven);
// repeat(3, isOdd);


const greaterThan = (firstNumer) => (secondNumber) => secondNumber > firstNumer;

// console.log(greaterThan(10)(15));
const greaterThan10 = greaterThan(10);
console.log(greaterThan10(15));
