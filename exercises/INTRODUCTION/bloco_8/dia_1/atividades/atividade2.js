const check = (numberBet, numberDrawn) => numberBet === numberDrawn;

const randomNumber = (numberBet, check) => {
  const numberDrawn = Math.floor((Math.random()) * (5 - 1) + 1);
  return check(numberBet, numberDrawn) ? `Parabéns você ganhou` : `Tente novamente`;
}

console.log(randomNumber(2, check));