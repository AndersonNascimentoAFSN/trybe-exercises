const arrayCountries = ['Brazil', 'Japan', 'China', 'Canada'];

// Sem destruturação de array:
// const firstCountry = arrayCountries[0];
// const secondCountry = arrayCountries[1];
// const thirdCountry = arrayCountries[2];
// const fourthCountry = arrayCountries[3];

// Com destruturação de array:
const [firstCountry, secondCountry, thirdCountry, fourthCoyntry] = arrayCountries;
// console.log(firstCountry);


let a = 8, b = 6;
// Only change code below this line
[a, b] = [b, a];
// console.log(a, b);

const source = [1,2,3,4,5,6,7,8,9,10];

function removeFirstTwo(list) {
  // Only change code below this line
  // const arr = list; // Change this line
  const [,,...arr] = list;
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
// console.log(arr);
