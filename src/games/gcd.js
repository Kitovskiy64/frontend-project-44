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

export const getGcdGameDescription = () => 'Find the greatest common divisor of given numbers.';

export const generateGcdRound = () => {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = gcd(num1, num2);
  return { question: `${num1} ${num2}`, correctAnswer: String(correctAnswer) };
};
