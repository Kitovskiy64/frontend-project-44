/* eslint-disable import/no-unresolved */
import greetUser from '../src/Games/cli.js';
import progGame from '../src/Games/progressionGame.js';

const name = greetUser();

progGame(name);
