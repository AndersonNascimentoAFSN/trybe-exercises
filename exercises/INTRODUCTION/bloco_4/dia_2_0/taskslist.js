
// Criar lista:
let taskList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
console.log(taskList.length);

// Exibir itens da lista:
let searchForFirstTask = taskList[0];
console.log(searchForFirstTask);
let searchForLastTask = taskList[taskList.length - 1];
console.log(searchForLastTask);

// Adicionar item na lista: 
taskList.push('Fazer exercícios da Trybe');
console.log(taskList[taskList.length - 1]);
taskList.unshift('concluir o projeto da Trybe');
console.log(taskList[0]);

// remover item da lista:
taskList.pop();
console.log(taskList);
taskList.shift();
console.log(taskList);

// Procurar índice de um item no Array

let indexofTask = taskList.indexOf('Reunião');
console.log(indexofTask);