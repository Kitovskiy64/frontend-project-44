import { generateNumber } from '../utils.js';

export const gameDescription = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

export const generateGcdRound = () => {
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const question = `${num1} ${num2}`;
  const correctAnswer = String(gcd(num1, num2));
  return { question, correctAnswer };
};
