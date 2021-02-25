// Programa Conversão porcentagem e letras.
let notaPorcentagem = 90;
let notaLetra = null;

if(notaPorcentagem >= 90){
  notaLetra = 'A';
} else if(nota >= 80){
  notaLetra = 'B';
} else if(nota >= 70){
  notaLetra = 'C';
} else if(nota >= 60){
  notaLetra = 'D';
} else if(nota >= 50){
  notaLetra = 'E';
} else {
  notaLetra = 'F';
}
console.log(`A conversão da porcentagem ${notaPorcentagem}% é: ${notaLetra}`);