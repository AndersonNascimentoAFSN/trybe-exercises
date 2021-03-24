const testingScope = (escopo) =>  {
  if (escopo === true) {
    let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
    ifScope = `${ifScope} Ótimo, fui utilizada no escopo!`;
    console.log(ifScope);
  } else {
    let elseScope = `Não devo ser utilizada fora do meu escopo (else)`; 
    console.log(elseScope);
  }
  console.log(`${ifScope} O que estou fazendo aqui? :O`);
}

// testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const order = (array) => {
  let len = array.length;
  for (let indexLine = 0; indexLine < len; indexLine++) {
    for (let indexColumn = 0; indexColumn < len; indexColumn++) {
        if(array[indexColumn] > array[indexColumn + 1]) {
        let tmp = array[indexColumn];
        array[indexColumn] = array[indexColumn + 1];
        array[indexColumn + 1] = tmp;
      }
    }
  }
  return array;
}
// console.log(order(oddsAndEvens));

const orderArrayNumbers = oddsAndEvens.sort((a, b) => a - b);
// console.log(orderArrayNumbers)