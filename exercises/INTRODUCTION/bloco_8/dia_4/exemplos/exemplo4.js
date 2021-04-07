// Maior valor em um array
const numbers = [50, 85, -30, 3, 15];

// Com for

const highestValueList = (numbersList) => {
  let highestValue = 0;
  for (let index = 0; index < numbersList.length; index += 1) {
    const element = numbersList[index];
    if (element > highestValue) {
      highestValue = element;
    }
  }
  return highestValue;
}
// console.log(highestValueList(numbers));

// Com reduce
const getHighestNumber = (Acummulator, currentValue) => {
  console.log(Acummulator, currentValue);
  return (Acummulator > currentValue) ? Acummulator : currentValue;
}
  

const highestValueListWithReduce = numbers.reduce(getHighestNumber, 0);
console.log(highestValueListWithReduce);