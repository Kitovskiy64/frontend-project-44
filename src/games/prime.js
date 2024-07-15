import { generateNumber } from '../utils.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const generatePrimeRound = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question: String(question), correctAnswer };
};
