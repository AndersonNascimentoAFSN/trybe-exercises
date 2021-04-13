

const number = prompt('Insira um número: ');

const createMatriz = (number) => {
  const matriz = [];
  let array = [];
  for (let indexLine = 0; indexLine < number; indexLine += 1) {
    array = [];
    for (let indexColumn = 0; indexColumn < number; indexColumn += 1) {
      let texto = prompt(`Insira ${number} da linha ${indexLine}: `);
      array.push(texto);
      matriz[indexLine] =  [...array];
    }
    
  }
  return matriz;
}

const matriz = createMatriz(number);
