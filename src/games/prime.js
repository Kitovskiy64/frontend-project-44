const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generatePrimeRound = () => {
  const question = generateNumber(1, 100);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
