import readLineSync from 'readline-sync';

const isEvenNumber = (num) => {
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
    let correctAnswer;
    if (isEvenNumber(randomNumber)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if ((isEvenNumber(randomNumber) && userAnswer === 'yes' || (!isEvenNumber(randomNumber) && userAnswer === 'no'))) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default evenGame;
