/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
import readLineSync from 'readline-sync';
// eslint-disable-next-line import/extensions

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

const gcdLogic = (a, b) => {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const gcdGame = (name) => {
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const a = randomNumber();
    const b = randomNumber();
    const correctOperation = gcdLogic(a, b);
    console.log(`Question: ${a} ${b}`);
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

export default gcdGame;
