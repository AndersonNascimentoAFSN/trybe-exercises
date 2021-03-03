const info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log(`Bem-vinda, ${info['personagem']}`);
console.log('\n')

info['recorrente'] = 'Sim';
console.log(info);
console.log('\n')

for(key in info) {
  console.log(key);
}
console.log('\n')

for(key in info) { 
  console.log(info[key]);
}
console.log('\n')

// Clonar objeto info

const info2 = {...info} 
info2.personagem = 'Tio Patinhas';
info2.origem = 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178';
info2.nota = 'O último MacPatinhas';
info2.recorrente = 'Sim';

console.log(info2);
console.log('\n');



let keys = Object.keys(info); //['personagem', 'origem', 'nota', 'recorrente']

for(let index = 0; index < keys.length; index += 1){
  if(info[keys[index]] === 'Sim' && info2[keys[index]] === 'Sim'){
    console.log("Ambos recorrentes");
  } else {
    console.log(`${info[keys[index]]} e ${info2[keys[index]]}`);
  }
}

