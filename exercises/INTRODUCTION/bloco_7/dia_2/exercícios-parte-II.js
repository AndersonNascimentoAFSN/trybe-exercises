const lesson1 = {
  materia: 'Matemática', 
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// 1) Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addEntrieLesson = (lesson, name, value)=> {
  lesson[name] = value;
}
addEntrieLesson(lesson2, 'turno', 'manhã');
// console.log(lesson2);

// 2) Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeysLesson = (lesson) => Object.keys(lesson);

// console.log(listKeysLesson(lesson1));

// 3) Crie uma função para mostrar o tamanho de um objeto.

const lengthLesson = (lesson) => Object.entries(lesson).length;

// console.log(lengthLesson(lesson1));

// 4) Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listValues = (lesson) => Object.values(lesson);

// console.log(listValues(lesson1));

// 5) Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
// console.log(allLessons);


// 6) Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const sumNumbersStudants = (lessons) => {
  let sum = 0;
  for (const key in lessons) {
    if (Object.hasOwnProperty.call(lessons, key)) {
      const element = lessons[key];
      sum += element.numeroEstudantes;
    }
  }
  return sum;
}

// console.log(sumNumbersStudants(allLessons));

// 7) Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const getValueByNumber = (lesson, index) => Object.values(lesson)[index];

// console.log(getValueByNumber(lesson1, 0));

// 8) Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:

const verifyPair = (obj, key, value) => {
  const values = Object.values(obj);
  if (obj.hasOwnProperty(key) && values.includes(value)) {
    return true;
  }
  return false;
}

// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'))

////// Bônus 



/* 1) Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
 */
const clone = allLessons;
// console.log(clone);

const getNumberOfStudentsMath = (object, subject) => {
  let count = 0;
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if(element.materia === subject) {
        count += element.numeroEstudantes;
      }
    }
  }
  return count;
};

// console.log(getNumberOfStudentsMath(clone, 'Matemática'))

/* 2) Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: */

const createReport = (lessons, teacher) => {
  const report = {};
  const classes = [];
  let numberOfStutends = 0;
  for (const key in lessons) {
    if (Object.hasOwnProperty.call(lessons, key)) {
      const element = lessons[key];
      if (element.professor === teacher) {
        const teacher = element.professor;
        classes.push(element.materia);
        numberOfStutends += element.numeroEstudantes;
        Object.assign(report, {professor: teacher, aulas: classes, estudantes: numberOfStutends});
      }
    }
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
