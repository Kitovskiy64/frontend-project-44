/* eslint-disable no-console */
import readLineSync from 'readline-sync';

function greetUser() {
  const name = readLineSync.question('May I have your name? ');
  // eslint-disable-next-line no-useless-concat
  console.log('Hello' + `, ${name}!`);
}

// eslint-disable-next-line import/prefer-default-export
export { greetUser };
