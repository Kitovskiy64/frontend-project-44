export const gameDescription = 'What is the result of the expression?';

export const generateCalcRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const operations = ['+', '-', '*'];
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let correctAnswer;

  switch (operation) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      return NaN;
  }

  return { question: `${num1} ${operation} ${num2}`, correctAnswer: String(correctAnswer) };
};
