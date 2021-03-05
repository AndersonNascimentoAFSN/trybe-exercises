const caixaUm = document.querySelector(".caixa1");
const caixaDois = document.querySelector(".caixa2");

function trocaCor() {
  //// Para trocar a cor do background da div através do JavaScript:
  // caixaDois.style.backgroundColor = "cyan";
  //// Para trocar a cor do brackground da div por uma classe no CSS:
  caixaDois.classList.toggle('colorCian');
}
//Crie seu event listener abaixo:

caixaUm.addEventListener('click', trocaCor);
// caixaUm.addEventListener('mouseover', trocaCor);