export const getEvenGameDescription = () => 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateEvenRound = () => {
  const question = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return { question, correctAnswer };
};
