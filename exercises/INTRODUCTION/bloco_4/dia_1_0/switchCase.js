let name = 'Benedito'
let nota = 90;
let estado = null;

if(nota > 80) {
  estado = 'aprovado';
} else if(nota <=80 && nota > 60){
  estado = 'espera';
} else {
  estado = 'reprovado';
}

switch (estado) {
  case 'aprovado':
    console.log(`Parabéns, ${name}, você foi aprovado(a)!`);
    break;
  case 'espera':
    console.log('Você está na nossa lista de espera');
    break;
  case 'reprovado':
    console.log('Infelizmente você foi reprovado(a). Por favor, tente outra vez em breve!');
  default: 
    console.log('Não se aplica.');
}