const { questionFloat } = require('readline-sync');

console.log("Informe o seu peso e altura para calcular o IMC");

const peso = questionFloat('Qual o seu peso? ')
const altura = questionFloat('Qual a sua altura? ');

const imc = (peso, altura) => {
  return peso / Math.pow(altura, 2);
};

const imcPerson = imc(peso, altura);

const printClassificationImc = (imcPerson) => {
  let classificationImc = '';
  if(imcPerson <= 18.5) {
    classificationImc = "Abaixo do peso(magreza)";
  } else if (imcPerson <= 24.9) {
    classificationImc = "Peso normal";
  } else if (imcPerson <= 29.9) {
    classificationImc = "Acima do peso (sobrepeso)";
  } else if (imcPerson <= 34.9) {
    classificationImc = "Obesidade grau I";
  } else if (imcPerson <= 39.9) {
    classificationImc = "Obesidade grau II";
  } else {
    classificationImc = "Obesidade graus III e IV";
  }
  return classificationImc;
};

const classificationImcPerson = printClassificationImc(imcPerson);



console.log(`Seu IMC é: ${imcPerson}. Você está na classificação: ${classificationImcPerson}`);
