import readLineSync from 'readline-sync';
import greetUser from './cli.js';

const playGame = (gameDescription, generateRound) => {
  const name = greetUser();
  console.log(gameDescription);

  let correctAnswersCount = 0;
  const roundCount = 3;

  while (correctAnswersCount < roundCount) {
    const { question, answer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playGame;
