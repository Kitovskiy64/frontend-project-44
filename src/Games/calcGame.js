/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
import readLineSync from 'readline-sync';
// eslint-disable-next-line import/extensions

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const calcResult = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;

    case '-':
      return a - b;

    case '*':
      return a * b;

    default:
      return NaN;
  }
};

const calcGame = (name) => {
  console.log('What is the result of the expression?');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const a = randomNumber();
    const b = randomNumber();
    const operations = ['+', '-', '*'];
    const operation = operations[Math.floor(Math.random() * operations.length)];
    const correctOperation = calcResult(a, b, operation);
    console.log(`Question: ${a} ${operation} ${b}`);
    const userAnswer = readLineSync.question('Your answer: ');
    if (+userAnswer === correctOperation) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctOperation}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default calcGame;
