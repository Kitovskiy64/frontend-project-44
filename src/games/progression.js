import { getRandomNumber } from '../utils.js';

export const gameDescription = 'What number is missing in the progression?';

const progressionLength = 10;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

export const generateProgressionRound = () => {
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const hiddenNumberIndex = getRandomNumber(0, progressionLength - 1);

  const progression = generateProgression(start, step, progressionLength);
  const answer = String(progression[hiddenNumberIndex]);

  progression[hiddenNumberIndex] = '..';

  const question = progression.join(' ');

  return { question, answer };
};
