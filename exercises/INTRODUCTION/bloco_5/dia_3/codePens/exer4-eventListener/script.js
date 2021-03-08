//Crie seu código abaixo dessa linha:
//Crie seu código abaixo dessa linha:
const box1 = document.querySelector('.caixa1');
const box2 = document.querySelector('.caixa2');
const btn1 = document.querySelector('.botao1');
const btn2 = document.querySelector('.botao2')
const input = document.querySelector('.caixa-texto');


function colorGreenBox(event){
  if (event.target.classList[0] === 'botao1') {
  box1.style.cssText = 'background: green; color: white; ';
   } else {
    box2.style.cssText = 'background: green; color: white; ';
   }
  console.log(event.target.classList[0]);
}

function changeText(event) {
  if(input.value = 'Go Trybe!') {
    alert('Vamos com tudo!'); 
  }

  if (event.target.classList[0] === 'botao1') {
    box1.innerText = input.value; 
  } else {
    box2.innerText = input.value;
  }
  
}

btn1.addEventListener('mousemove', colorGreenBox);
btn2.addEventListener('mousemove', colorGreenBox);
btn1.addEventListener('click', changeText);
btn2.addEventListener('click', changeText);