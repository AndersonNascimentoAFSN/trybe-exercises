const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo). */

const dragonAttack = () => {
  const minDamage = 15;
  const maxDamage = dragon.strength;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return damage;
}

/* Crie uma função que reotorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo). */

const warriorAttack = () => {
  const minDamage = warrior.strength;
  const maxDamage = minDamage * warrior.weaponDmg;
  const damage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
  return damage;
}

/* Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0. */

const mageAttack = () => {
  const mageMana = mage.mana;
  const minDamage = mage.intelligence;
  const maxDamage = minDamage * 2;
  
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor(Math.random() * (maxDamage - minDamage + 1) + minDamage);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  } 
    return turnStats;
}

const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack();
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack();
    mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  }
}

gameActions.warriorTurn(warriorAttack);

console.log(dragon.healthPoints)
gameActions.mageTurn(mageAttack);
console.log(dragon.healthPoints);