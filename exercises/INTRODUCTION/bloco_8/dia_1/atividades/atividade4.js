const checkAnswer = (correctList, validateList) => {
  let finalScore = 0;

  validateList.forEach((userAnswer, index) => {
    if(userAnswer === correctList[index]) {
      finalScore += 1;
    } else if (userAnswer !== correctList[index] && userAnswer !== 'N.A') {
      finalScore -= 0.5;
    }
  });

  return finalScore;
}

const scoreAnswer = (correctList, validateList, check) => {
  return check(correctList, validateList);
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

console.log(scoreAnswer(rightAnswers, studentAnswers, checkAnswer));

