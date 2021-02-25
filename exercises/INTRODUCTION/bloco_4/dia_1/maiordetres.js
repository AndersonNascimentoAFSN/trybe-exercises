// programa maior de três números
let number1 = 10;
let number2 = 15;
let number3 = 25;

if(number1 > number2 && number1 > number3){
  console.log(`O número ${number1} é o maior entre os três`);
} else if(number2 > number1 && number2 > number3){
  console.log(`O número ${number2} é o maior entre os três`);
} else {
  console.log(`O número ${number3} é o maior entre os três`);
}