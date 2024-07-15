import { getRandomNumber } from '../utils.js';

export const gameDescription = 'What is the result of the expression?';

export const generateCalcRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomNumber(0, operations.length - 1)];
  let answer;

  switch (operation) {
    case '+':
      answer = num1 + num2;
      break;
    case '-':
      answer = num1 - num2;
      break;
    case '*':
      answer = num1 * num2;
      break;
    default:
      throw new Error(`Unknown operator: ${operation}`);
  }

  return { question: `${num1} ${operation} ${num2}`, answer: String(answer) };
};
