/* eslint-disable import/extensions */
import greetUser from '../src/cli.js';
import evenGame from '../src/evenGame.js';

const name = greetUser();

evenGame(name);
