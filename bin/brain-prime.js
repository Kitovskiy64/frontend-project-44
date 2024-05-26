/* eslint-disable import/extensions */
import greetUser from '../src/Games/cli.js';
import primeGame from '../src/Games/primeGame.js';

const name = greetUser();

primeGame(name);
