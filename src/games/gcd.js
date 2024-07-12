const gcd = (num1, num2) => {
  let a = num1;
  let b = num2;
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const gameDescription = 'Find the greatest common divisor of given numbers.';

export const generateGcdRound = () => {
  const num1 = generateNumber(1, 100);
  const num2 = generateNumber(1, 100);
  const correctAnswer = gcd(num1, num2);
  return { question: `${num1} ${num2}`, correctAnswer: String(correctAnswer) };
};
