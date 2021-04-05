// Usando for 
const persons = [
  {firstName: 'Maria', lastName: 'Ferreira'},
  {firstName: 'João', lastName: 'Silva'},
  {firstName: 'Antônio', lastName: 'Cabral'},
];

const fullNames = [];

for (let index = 0; index < persons.length; index += 1) {
  const element = persons[index];
  fullNames.push(`${persons[index].firstName} ${persons[index].lastName}`); 
}

// console.log(fullNames);

// Usando map
const fullNamesMap = persons.map((person) => `${person.firstName} ${person.lastName}`);

// console.log(fullNames);

// Negative Numbers com MAP

const numbers = [1, 2, 3, 4, -5];

const negativeNumbers = numbers.map((number) => ((number > 0) ? number * (-1) : number));

// console.log(negativeNumbers);

// Negative Numbers com FOR

const negativeNumbersWithFor = [];

for (let index = 0; index < numbers.length; index += 1) {
  const element = numbers[index];
  const number = element > 0 ? element * (-1) : element;
  negativeNumbersWithFor.push(number);
}

// console.log(negativeNumbersWithFor);

// Unir Arrays com map

const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

// const listProducts = [{Arroz: 2.99}...]

const updateProducts = (listProducts, listPrices) => 
  listProducts.map((product, index) => ( 
    { [product]: listPrices[index] }
  ));

// console.log(updateProducts(products, prices));


const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: '59' },
      { name: 'Português', nota: '80' },
      { name: 'Química', nota: '78' },
      { name: 'Biologia', nota: '92' },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '76' },
      { name: 'Português', nota: '90' },
      { name: 'Química', nota: '70' },
      { name: 'Biologia', nota: '80' },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '91' },
      { name: 'Português', nota: '85' },
      { name: 'Química', nota: '92' },
      { name: 'Biologia', nota: '90' },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '70' },
      { name: 'Português', nota: '70' },
      { name: 'Química', nota: '60' },
      { name: 'Biologia', nota: '50' },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: '80' },
      { name: 'Português', nota: '82' },
      { name: 'Química', nota: '79' },
      { name: 'Biologia', nota: '75' },
    ],
  },
];

// Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã.

// Usando for 

const allNameStudents = [];

for (let index = 0; index < estudantes.length; index += 1) {
  const element = estudantes[index];
  if (element.turno === 'Manhã') {
    allNameStudents.push(`${element.nome} ${element.sobrenome}`);
  }
}
// console.log(allNameStudents);

// Usando map e filter

const allNameStudentsWithFilterMap = estudantes.filter((estudante) => estudante.turno === 'Manhã').map((estudante) => `${estudante.nome} ${estudante.sobrenome}`);
// console.log(allNameStudentsWithFilterMap);


// Buscar um estudante pelo nome e retornar a situação dele em cada matéria:

// Usando for

const findStudent = (name, students) => {
  for (let index = 0; index < students.length; index += 1) {
    const element = students[index];
    if (element.nome === name) {
      return element;
    }
  }
}
// console.log(findStudent('Natalia', estudantes));

const reportStatus = (name, students) => {
  const getStudent = findStudent(name, students);
  const report = [];
  for (let index = 0; index < getStudent.materias.length; index += 1) {
    const element = getStudent.materias[index];
    if (element.nota >= 60) {
      report.push(`${element.name} Aprovado`);
    } else {
      report.push(`${element.name} Reprovado`);
    }
  }
  return report;
}
// console.log(reportStatus('Natalia', estudantes));

// Usando map e find

const reportStatusWithFindMap = (name, students) => {
  const studentInfo = students.find((student) => student.nome === name);
  return studentInfo.materias.map((materia) => `${materia.name} ${materia.nota >= 60 ? 'Aprovado' : 'Reprovado'}`);
}
// console.log(reportStatusWithFindMap('Natalia', estudantes));


