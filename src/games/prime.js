import { getRandomNumber } from '../utils.js';

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const generatePrimeRound = () => {
  const number = getRandomNumber(1, 100);
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question: String(number), answer };
};
