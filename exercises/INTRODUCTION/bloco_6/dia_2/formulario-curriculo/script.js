const stateSelect = document.getElementById('state');
// const submitBtn = document.getElementById('submit');

const stateList = [{name: 'Acre', sigla: 'AC'}, {name: 'Alagoas', sigla: 'AL'}, {name: 'Amapá', sigla: 'AP'}, {name: 'Amazonas', sigla: 'AM'}, {name: 'Bahia', sigla: 'BA'}, {name: 'Ceará', sigla: 'CE'}, {name: 'Distrito Federal', sigla: 'DF'}, {name: 'Espírito Santo', sigla: 'ES'}, {name: 'Goiás', sigla: 'GO'}, {name: 'Maranhão', sigla: 'MA'}, {name: 'Mato Grosso', sigla: 'MT'}, {name: 'Mato Grosso do Sul', sigla: 'MS'}, {name: 'Minas Gerais', sigla: 'MG'}, {name: 'Pará', sigla: 'PA'}, {name: 'Paraíba', sigla: 'PB'}, {name: 'Paraná', sigla: 'PR'}, {name: 'Pernambuco', sigla: 'PE'}, {name: 'Piauí', sigla: 'PI'}, {name: 'Rio de Janeiro', sigla: 'RJ'}, {name: 'Rio Grande do Norte', sigla: 'RN'}, {name: 'Rio Grande do Sul', sigla: 'RS'}, {name: 'Rondônia', sigla: 'RO'}, {name: 'Santa Catarina', sigla: 'SC'}, {name: 'São Paulo', sigla: 'SP'}, {name: 'Sergipe', sigla: 'SE'}, {name: 'Tocantins', sigla: 'TO'}];

function createStateOption() {
  stateList.forEach((item) => {
    const state = document.createElement('option');
    state.textContent = item.name;
    state.value = item.sigla;
    stateSelect.appendChild(state);
  })
}

function validateData(data) { 
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5) {
    const day = data.substr(0, 2);
    const month = data.substr(3, 2);
    const year = data.substr(6, 4);
    if ((day > 0 && day <= 31) && (month > 0 && month <= 12) && (year >= 0 && year.length === 4)) {
      return true;
    }
  }
  return false;
}

function checkData() {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if (!userData) {
    inputData.value = '';
    alert('data inválida');
    return false;
  }
  return userData;
}

function checkEmail() {
  const email = document.querySelector('.email-input');
  let insertedEmail = email.value;
  const emailFormat = /^[a-z0-9.||_]+@[a-z0-9]+\.[a-z]+$/.test(insertedEmail);
  if (!emailFormat) {
    email.value = '';
    alert('email inválido');
    return false;
  }
  return emailFormat;
}


function renderCurriculum(event) {
  event.preventDefault();
  const formElements = document.querySelectorAll('input');
  for (let index = 0; index < formElements.length; index += 1) {
    if (formElements[index].type === 'radio' && !formElements[index].checked) {
      continue;
    }
    const userInput = formElements[index].value;
    const dataUser = document.querySelector('.form-data');
    if(checkEmail() && checkData()) {
      const div = document.createElement('div');
      div.className = 'div-curriculum';
      div.innerHTML = userInput;
      dataUser.appendChild(div);
    }
  }
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  const div = document.querySelectorAll('.div-curriculum');
  for (let index = 0; index < formElements.length && index < div.length; index += 1) {
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }

}

const submitButton = document.querySelector('#submit-button');
submitButton.addEventListener('click', renderCurriculum);
clearButton.addEventListener('click', clearFields);

window.onload = function() {
  createStateOption();
}

// function validationData() {
//   const dataValue = document.getElementById('data').value;
//   const regex = /(\d+)/g
//   const dataNumbers = dataValue.match(regex);

//   if (Object.prototype.toString.call(dataNumbers) === '[object Array]') {
//     const day = parseInt(dataNumbers[0], 10);
//     const month = parseInt(dataNumbers[1], 10);
//     const yearString = dataNumbers[2];
//     console.log(yearString);
//     const year = Math.sign(yearString) * parseInt(yearString);
//     console.log(day, month, year);
//     if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
//       return true
//     } 
//     return false;
//   }
// }
// validationData();
