import { generateNumber } from '../cli.js';

export const gameDescription = 'What is the result of the expression?';

export const generateCalcRound = () => {
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const operations = ['+', '-', '*'];
  const operation = operations[generateNumber(0, operations.length - 1)];
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
      throw new Error(`Unknown operator: ${operation}`);
  }

  return { question: `${num1} ${operation} ${num2}`, correctAnswer: String(correctAnswer) };
};
