const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => (
  // Adicione o código aqui
  new Promise((resove, reject) => {
    const result = Animals.find((animal) => { 
      return animal.name === name;
    });
    if (!result) {
      return reject('Nenhum animal com esse nome!');
    }
    return resove(result);
  })
);

const getAnimal = (name) => {
  // Adicione o código aqui.
  return findAnimalByName(name);
};

const findAnimalByAge = (age) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const listAnimals = Animals.filter((animal) => animal.age === age);
      if (listAnimals.length !== 0) {
        return resolve(listAnimals);
      };
      const messageError = 'Nenhum animal encontrado!';
      return reject(messageError);
    }, 100);
  })
);


const getAnimalByAge = (age) => {
  return findAnimalByAge(age)
    .then(animal => animal);
};

module.exports = {
  getAnimal,
  getAnimalByAge,
}