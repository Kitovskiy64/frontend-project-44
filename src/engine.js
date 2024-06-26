import readLineSync from 'readline-sync';

const playGame = (getGameDescription, generateRound, name) => {
  console.log(getGameDescription());

  let correctAnswersCount = 0;
  const rounds = 3;

  while (correctAnswersCount < rounds) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readLineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
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

export default playGame;
