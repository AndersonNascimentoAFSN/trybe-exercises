const caixaTexto = document.querySelector('.caixa-texto');
const caixaUm = document.querySelector('.caixa1');
const caixaDois = document.querySelector('.caixa2');

function trocaTextoA () {
  caixaUm.innerText = caixaTexto.value;
}
function trocaTextoB () {
  caixaDois.innerText = caixaTexto.value;
}
//Crie seu event listener abaixo:
