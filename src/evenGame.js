/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
import readLineSync from 'readline-sync';
// eslint-disable-next-line import/extensions

const evenNumber = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};
const evenGame = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if ((evenNumber(randomNumber) && userAnswer === 'yes' || (!evenNumber(randomNumber) && userAnswer === 'no'))) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      const correctAnswer = evenNumber(randomNumber) ? 'yes' : 'no';
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
