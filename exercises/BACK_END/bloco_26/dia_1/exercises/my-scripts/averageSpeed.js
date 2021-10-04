const { questionFloat } = require('readline-sync');


console.log('Digite a distância e o tempo para descobrir a velocidade média de um carro');

const distance = questionFloat('Qual a distância percorrida? ');
const time = questionFloat('Em quanto tempo o carro percorreu esta distância? ')

const averageSpeed = (distance, time) => {
  return distance / time;
};

const averageSpeedCar = averageSpeed(distance, time);

console.log(`A velocidade média do carro é: ${averageSpeedCar} m/s`);

