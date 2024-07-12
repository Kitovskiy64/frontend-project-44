import readLineSync from 'readline-sync';

const greetUser = () => {
  const name = readLineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export default greetUser;

export const generateNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const isEven = (num) => num % 2 === 0;
