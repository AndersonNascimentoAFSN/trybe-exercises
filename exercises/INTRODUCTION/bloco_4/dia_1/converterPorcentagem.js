// Programa Conversão porcentagem e letras.
let notaPorcentagem = 51;
let notaLetra = null;


if(notaPorcentagem >= 100 || notaPorcentagem <= 0){
  notaLetra = 'Erro!'
}
  else if(notaPorcentagem >= 90 && notaPorcentagem){
  notaLetra = 'A';
} else if(notaPorcentagem >= 80){
  notaLetra = 'B';
} else if(notaPorcentagem >= 70){
  notaLetra = 'C';
} else if(notaPorcentagem >= 60){
  notaLetra = 'D';
} else if(notaPorcentagem >= 50){
  notaLetra = 'E';
} else if (notaPorcentagem < 50 && notaPorcentagem >= 0){
  notaLetra = 'F';
}
if(notaLetra === 'Erro!') {
  console.log('Erro!')
} else {
  console.log(`A conversão da porcentagem ${notaPorcentagem}% é: ${notaLetra}`);
}
