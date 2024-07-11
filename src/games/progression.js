export const gameDescription = 'What number is missing in the progression?';

export const generateProgressionRound = () => {
  const progressionLength = 10;
  const start = Math.floor(Math.random() * 6) + 1;
  const step = Math.floor(Math.random() * 20) + 1;
  const hiddenIndex = Math.floor(Math.random() * progressionLength);
  const progression = Array.from({ length: progressionLength }, (_, i) => start + i * step);
  const correctAnswer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  return { question: progression.join(' '), correctAnswer };
};
