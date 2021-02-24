let name = 'Benedito'
let nota = 90;
let estado = null;

if(nota > 80) {
  estado = 'aprovado'
  console.log(`Parabéns, ${name}, você foi aprovado(a)!`);
} else if(nota <=80 && nota > 60){
  estado = 'espera'
  console.log('Você está na nossa lista de espera');
} else {
  estado = 'reprovado'
  console.log('Infelizmente você foi reprovado(a). Por favor, tente outra vez em breve!');
}


