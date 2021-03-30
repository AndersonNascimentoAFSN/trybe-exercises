const person = {
  name: 'Carol',
  lastName: 'Santos',
  message: (callback) => {
    return callback();
  }  
}

const greeting = () => {
  console.log(`Hi, ${person.name} ${person.lastName}! How are you?`);
}

const goodbyes = () => {
  console.log(`See you tomorrow, ${person.name} ${person.lastName}!`);
}

// person.message(goodbyes);

///// Second Example ///////////// currying

// const discount = (price, discount) => {
//   return price * discount;
// }

// const price = 500;

// const onlyDiscount = discount(price, 0.10);

// // console.log(onlyDiscount);

// const finalPrice = price - onlyDiscount;
// console.log(finalPrice);


const discount = (discount) => {
  return (price) => {
    return price * discount;
  };
}

const price = 500;
const tenPercentDiscount = discount(0.10);
const finalPrice = price - tenPercentDiscount(price);
console.log(finalPrice);



