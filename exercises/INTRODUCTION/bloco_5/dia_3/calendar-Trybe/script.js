function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfDezember() {
  
  for(let day of dezDaysList) {
    if (dezDaysList.length > 0) {
      const list = document.querySelector('#days');
      const listItem = document.createElement('li');
      listItem.classList.add('day');
      listItem.textContent = day;

      if (listItem.textContent === '24' || listItem.textContent === '25' || listItem.textContent === '31') {
        listItem.classList.add('holiday');
      }
      if (listItem.textContent === '4' || listItem.textContent === '11' || listItem.textContent === '18' || listItem.textContent === '25') {
        listItem.classList.add('friday');
      }
      list.appendChild(listItem);
    }
  }
}

createDaysOfDezember();

// Exercício 2

function createHolidayButton(buttonName) {
  const newBtn = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');
  newBtn.id = 'btn-holiday';
  newBtn.textContent = buttonName;
  buttonsContainer.appendChild(newBtn);
}

createHolidayButton('Feriado');

// Exercício 3 

function holidayButtonEvent() {
  const btnHoliday = document.querySelector('#btn-holiday');
  btnHoliday.addEventListener('click', (event) => {
    const daysHoliday = document.querySelectorAll('.holiday');
    daysHoliday.forEach((day) => day.classList.toggle('holiday-day'));
  }); 
}

holidayButtonEvent();

// Exercício 4

function createFridayButton(nameBtn) {
  const btn = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');
  btn.id = 'btn-friday';
  btn.textContent = nameBtn;
  buttonsContainer.appendChild(btn);
}

createFridayButton('Sexa-feira');

// Os exercício 2 e 4 poderiam ser feitos em uma única função: 

function createButton(name, btnId) {
  const newBtn = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');
  newBtn.id = btnId;
  newBtn.textContent = name;
  buttonsContainer.appendChild(newBtn);
}

// createButton('Feriado', 'btn-holiday');
// createButton('Sexa-feira', 'btn-friday');

// Exercício 5

function fridayButtonEvent(fridayArray) {
  const btnFriday = document.querySelector('#btn-friday');
  const daysFriday = document.querySelectorAll('.friday');

  btnFriday.addEventListener('click', (event) => {
    daysFriday.forEach((day, index, array) => {
      if (day.textContent !== 'Friday!') {
        day.textContent = 'Friday!';
      } else {
        array[index].textContent = fridayArray[index];
      }
    });
  });
}

let dezFridays = [4, 11, 18, 25];
fridayButtonEvent(dezFridays);

// Exercício 6

function zoomEffect() {
  const list = document.querySelector('#days');

  function zoom(event) {
    // event.stopPropagation();
    // console.log(event.target);
    if(event.target.classList[0] === 'day') {
      event.target.style.cssText = 'font-size: 30px; font-weight: 600; ';
    }
  }

  function unZoom(event) {
    event.stopPropagation();
    if(event.target.classList[0] === 'day') {
      event.target.style.cssText = 'font-size: 20px; font-weigth: 200; ';
    }
  }

  list.addEventListener('mouseover', zoom, {
    // capture: false
  });
  list.addEventListener('mouseout', unZoom, {
    // capture: false
  });
}

zoomEffect();

// Exercício 7

function TaskCalendar(newTaskName) {
  const listTask = document.querySelector('.my-tasks');
  const task = document.createElement('span');
  task.textContent = newTaskName;
  listTask.appendChild(task);
}
TaskCalendar('Projeto');


// Exercício 8

function changeColor(color) {
  const divColor = document.createElement('div');
  const divMyTasks = document.querySelector('.my-tasks');
  divMyTasks.appendChild(divColor);
  divColor.classList.add('task');
  divColor.style.cssText = `background: ${color}; `;
  divColor.setAttribute('data-color', color)
}

changeColor('blue');

// Exercício 9

function taskSelected() {
  const tasksColors = document.querySelector('.my-tasks');
  tasksColors.addEventListener('click', function(event) {
    if(event.target.classList[0] === 'task'){
      event.target.classList.toggle('task-selected');
    }
  });
}

taskSelected();

// Exxercício 10

function changeDayColor() {
  const listDays = document.querySelector('#days');
  const taskSelectedColor = document.getElementsByClassName('task-selected');
  console.log(taskSelectedColor);
  listDays.addEventListener('click', function(event) {
    if (event.target.classList[0] === 'day' && taskSelectedColor.length !== 0) {
      // let color = taskSelectedColor[0].style.background;
      let color = taskSelectedColor[0].getAttribute('data-color');
      event.target.classList.toggle(color);
      // event.target.style.color = color;
      // event.target.style.cssText = `color: ${color}; `;
    }
  });
}

changeDayColor()

// Bônus

function addTaskCalendar() {
  const btnTaskAdd = document.querySelector('#btn-add');
  const listTask = document.querySelector('.task-list');
  const taskInput = document.querySelector('#task-input');
  let messageAlert = 'Por favor, informe o nome do compromisso na caixa de texto, somente após isso clique no botão ADICIONAR ou pressione a tecla Enter';
  
  btnTaskAdd.addEventListener('click', function(event) {
    if (taskInput.value === '') {
      alert(messageAlert);
    }
    const task = document.createElement('p');
    listTask.appendChild(task);
    task.textContent = taskInput.value;
  });

  taskInput.addEventListener('keypress', function(event) {
    
    if (event.keyCode === 13) {
      if (taskInput.value === '') {
        alert(messageAlert);
      }
      const task = document.createElement('p');
      listTask.appendChild(task);
      task.textContent = taskInput.value;
    }
  })
}

addTaskCalendar();
