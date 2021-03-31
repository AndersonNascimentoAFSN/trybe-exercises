const names = ['Bianca', 'Camila', 'Fernando', 'Ana Roberta'];

const convertToUpperCase = (name, index, array) => {
  array[index] = name.toUpperCase();
};

names.forEach(convertToUpperCase);
console.log(names);