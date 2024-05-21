import greetUser from '../../src/cli';
import evenGame from '../src/evenGame';

const name = greetUser();

evenGame(name);
