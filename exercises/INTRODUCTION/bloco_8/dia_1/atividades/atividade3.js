const checkAnswer = (answerCorrect) => (answerValidate) => answerCorrect === answerValidate.toLowerCase();

const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';
console.log(checkAnswer(correctAnswer)(userAnswer));