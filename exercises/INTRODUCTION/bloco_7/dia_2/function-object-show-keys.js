// Parte II - Object.keys

// criar uma função que exiba as habilidades do objeto student.

const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

// Implementação sem Object.values
const listSkills = (student) => {
  const ArrayOfSkills = Object.keys(student);
  const ArrayOfSkillsFormat = [];
  for (let index = 0; index < ArrayOfSkills.length; index += 1) {
    ArrayOfSkillsFormat.push(`${ArrayOfSkills[index]}, Nível: ${student[ArrayOfSkills[index]]}`);
  }
  return ArrayOfSkillsFormat;
}

// console.log(listSkills(student1));
// console.log(listSkills(student2));

// Parte III - Object.values

const student = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkill: 'Ótimo',
};


const listSkillsWithFor = (student) => {
  const skills = [];
  for(skill in student) {
    skills.push(student[skill]);
  }
  return skills;
};

const listSkillsWitValues = (student) => Object.values(student);

// Sem Object.values
// console.log(listSkillsWithFor(student));

// Com Object.values
// console.log(listSkillsWitValues(student));


// Parte IV - Object.entries

const paises = {
  frança: 'Paris',
  Brasil: 'Brasília',
  Espanha: 'Madrid',
  Portugal: 'Lisboa',
};

const pairKeyValue = Object.entries(paises);
// console.log(pairKeyValue);

// Parte V - Object.assign

const person = {
  name: 'Alberto',
  lastName: 'Gomes',
  age: 20,
};

const info = {
  age: 23,
  job: 'engenheiro',
};

const family = {
  children: ['Maria', 'João'],
  wife: 'Ana',
};

Object.assign(person, info, family)
// console.log(person);

const clone = Object.assign(person);
// console.log(clone);

clone.name = 'Maria';
// console.log(person);

const clone2 = person;
// console.log(clone2);

const newPerson = Object.assign({}, person);
newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);