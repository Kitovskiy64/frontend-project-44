/* eslint-disable no-console */
import readLineSync from 'readline-sync';

const greetUser = () => {
  const name = readLineSync.question('Welcome to the Brain Games!\nMay I have your name? ');
  console.log(`'Hello, ${name}!`);
  return name;
};

export default greetUser;
