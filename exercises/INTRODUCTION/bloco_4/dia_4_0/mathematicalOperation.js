
function mathematicalOperation(number1, number2, operation) {
  
  switch(operation){
    case 'sum':
      return sum(number1, number2);
      break;
    case 'subtraction':
      return subtraction(number1, number2);
      break;
    case 'division':
      return division(number1, number2);
      break;
    case 'multiplication':
      return multiplication(number1, number2);
      break;
    case 'module':
      return module(number1, number2);
      break;
    default:
      'Operation not exist!';
  }

  function sum(number1, number2) {
    return number1 + number2;
  }
  
  function subtraction(number1, number2) {
    return number1 - number2;
  }
  
  function division(number1, number2) {
    return number1 / number2;
  }
  
  function multiplication(number1, number2) {
    return number1 * number2;
  }
  
  function module(number1, number2) { 
    return number1 % number2;
  }

}


console.log(`A soma dos dois números é: ${mathematicalOperation(2, 6, 'sum')}`);
console.log(`A subtração dos dois números é: ${mathematicalOperation(2, 6, 'subtraction')}`);
console.log(`A divisão dos dois números é: ${mathematicalOperation(2, 6, 'division')}`);
console.log(`A multiplicação dos dois números é: ${mathematicalOperation(2, 6, 'multiplication')}`);
console.log(`O módulo dos dois números é: ${mathematicalOperation(2, 6, 'module')}`);

