/* eslint-disable no-mixed-operators */
/* eslint-disable no-console */
import readLineSync from 'readline-sync';
// eslint-disable-next-line import/extensions

const randomNumber = () => Math.floor(Math.random() * 10) + 1;

const progLogic = () => {
  const startNumber = randomNumber();
  const progLength = Math.floor(Math.random() * 6) + 5;
  const progStep = Math.floor(Math.random() * 20) + 1;
  const progression = [];
  let currentNum = startNumber;

  for (let i = 0; i < progLength; i++) {
    progression.push(currentNum);
    currentNum += progStep;
  }
  const hiddenIndex = Math.floor(Math.random() * progLength);
  const hiddenNumber = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return { progression, hiddenNumber };
};

const progGame = (name) => {
  console.log('What number is missing in the progression?');
  let correctAnswersCount = 0;

  while (correctAnswersCount < 3) {
    const { progression, hiddenNumber } = progLogic();
    console.log(`Question: ${progression.join('  ')}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (+userAnswer === hiddenNumber) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenNumber}'.`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default progGame;
