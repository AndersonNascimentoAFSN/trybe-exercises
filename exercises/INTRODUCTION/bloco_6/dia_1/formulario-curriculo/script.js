const stateSelect = document.getElementById('state');
const submitBtn = document.getElementById('submit');

const stateList = [{name: 'Acre', sigla: 'AC'}, {name: 'Alagoas', sigla: 'AL'}, {name: 'Amapá', sigla: 'AP'}, {name: 'Amazonas', sigla: 'AM'}, {name: 'Bahia', sigla: 'BA'}, {name: 'Ceará', sigla: 'CE'}, {name: 'Distrito Federal', sigla: 'DF'}, {name: 'Espírito Santo', sigla: 'ES'}, {name: 'Goiás', sigla: 'GO'}, {name: 'Maranhão', sigla: 'MA'}, {name: 'Mato Grosso', sigla: 'MT'}, {name: 'Mato Grosso do Sul', sigla: 'MS'}, {name: 'Minas Gerais', sigla: 'MG'}, {name: 'Pará', sigla: 'PA'}, {name: 'Paraíba', sigla: 'PB'}, {name: 'Paraná', sigla: 'PR'}, {name: 'Pernambuco', sigla: 'PE'}, {name: 'Piauí', sigla: 'PI'}, {name: 'Rio de Janeiro', sigla: 'RJ'}, {name: 'Rio Grande do Norte', sigla: 'RN'}, {name: 'Rio Grande do Sul', sigla: 'RS'}, {name: 'Rondônia', sigla: 'RO'}, {name: 'Santa Catarina', sigla: 'SC'}, {name: 'São Paulo', sigla: 'SP'}, {name: 'Sergipe', sigla: 'SE'}, {name: 'Tocantins', sigla: 'TO'}];

function createStateOption() {
  stateList.forEach((item) => {
    const state = document.createElement('option');
    state.textContent = item.name;
    state.value = item.sigla;
    stateSelect.appendChild(state);
    // console.log(state.value);
  })
}

createStateOption();

// function createCurriculum(event) {
//   event.preventDefault();

// }

// submitBtn.addEventListener('click', createCurriculum);


function validationData() {
  const dataValue = document.getElementById('data').value;
  const regex = /(\d+)/g
  const dataNumbers = dataValue.match(regex);

  if (Object.prototype.toString.call(dataNumbers) === '[object Array]') {
    const day = parseInt(dataNumbers[0], 10);
    const month = parseInt(dataNumbers[1], 10);
    const yearString = dataNumbers[2];
    console.log(yearString);
    const year = Math.sign(yearString) * parseInt(yearString);
    console.log(day, month, year);
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
      return true
    } 
    return false;
  }
}
validationData();
