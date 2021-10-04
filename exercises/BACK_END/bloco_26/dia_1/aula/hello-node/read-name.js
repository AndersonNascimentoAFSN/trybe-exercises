// const readline = require('readline-sync');
// const nome = readline.question('Digite seu nome: ');
// const sobrenome = readline.question('Digite seu sobrenome: ');

const { question } = require('readline-sync');
const nome = question('Digite seu nome: ');
const sobrenome = question('Digite seu sobrenome: ');

console.log(`Olá, ${nome} ${sobrenome}`);
