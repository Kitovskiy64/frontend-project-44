/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
import readLineSync from 'readline-sync';
// eslint-disable-next-line import/extensions

const primeNum = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

const primeGame = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNum = randomNumber(100);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readLineSync.question('Your answer: ');
    const correctAnswer = primeNum(randomNum) ? 'yes' : 'no';
    if (correctAnswer === 'yes' && userAnswer === 'yes' || (correctAnswer === 'no' && userAnswer === 'no')) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default primeGame;
