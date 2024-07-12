import { generateNumber } from '../cli.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateEvenRound = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};
