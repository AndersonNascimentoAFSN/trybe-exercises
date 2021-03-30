const generateEmployess = (fullName) => {
  const email = fullName.toLowerCase().split(' ').join('_');
  return { fullName, email: `${email}@trybe.com`};
}

const newEmployess = (generate) => {

  const employees = {
    id1: generate('Pedro Guerra'),
    id2: generate('Luiza Drumond'),
    id3: generate('Carla Paiva'),
  }

  return employees;
}

console.log(newEmployess(generateEmployess));
