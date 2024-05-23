/* eslint-disable import/no-unresolved */
import greetUser from '../src/Games/cli.js';
import calcGame from '../src/Games/calcGame.js';

const name = greetUser();

calcGame(name);
