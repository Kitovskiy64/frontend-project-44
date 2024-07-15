import { generateNumber } from '../utils.js';

export const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const getQuestion = (first, step, hiddenNumberIndex) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(first + i * step);
  }
  const correctAnswer = String(progression[hiddenNumberIndex]);
  progression[hiddenNumberIndex] = '..';
  const question = progression.join(' ');
  return { question, correctAnswer };
};

export const generateProgressionRound = () => {
  const first = generateNumber(1, 50);
  const step = generateNumber(1, 10);
  const hiddenNumberIndex = generateNumber(0, progressionLength - 1);
  return getQuestion(first, step, hiddenNumberIndex);
};
