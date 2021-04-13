const carros = ['Gol', 'HB20', 'Focus'];
const motos = ['Biz', 'R1'];
const veiculos = ['F40', ...carros, 'Uno', ...motos];
// console.log(veiculos);

const conhecimentosTrybe = {
  softSkills: true,
  hardSkills: true,
  trabalho: true,
};

const pessoa = {
  nome: 'Nádia',
  idade: 28,
  cidade: 'BH',
};

const pessoaTryber = {
  ...pessoa, 
  ...conhecimentosTrybe,
  esporte: 'Corrida',
}

console.log(pessoaTryber);
