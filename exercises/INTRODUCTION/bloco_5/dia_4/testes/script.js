
const config = document.querySelector('#config');
const text = document.querySelector('.texto');



const data = {};

function handleChange(event) {
  // console.log(event.target.value);
  const target = event.target;
  document.body.style.backgroundColor = event.target.value;
  data[target.name] = target.value;
  console.log(data);

  if(!target.checkValidity()) {
    target.classList.add('invalid');
    // target.setCustomValidity('');
    target.nextElementSibling.textContent = target.validationMessage;
  } else {
    target.classList.remove('invalid');
  }
   text.textContent = event.target.value;
}


config.addEventListener('change', handleChange);