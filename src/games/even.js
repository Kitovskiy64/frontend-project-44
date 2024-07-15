import { getRandomNumber, isEven } from '../utils.js';

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateEvenRound = () => {
  const question = getRandomNumber(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};
