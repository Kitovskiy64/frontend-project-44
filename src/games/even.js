import { getRandomNumber } from '../utils.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateEvenRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return { question, answer };
};
