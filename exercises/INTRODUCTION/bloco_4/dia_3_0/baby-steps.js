let fruits = [3, 4, 10, 1, 12];

let sum = null;

for (let index = 0; index < fruits.length; index += 1) {
  let fruitsCurrent = fruits[index]
  sum += fruitsCurrent;
}

if(sum > 15)
  console.log(sum);
else 
  console.log('Valor menor ou igual a 15.');

