const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generatePrimeRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return { question, correctAnswer };
};
