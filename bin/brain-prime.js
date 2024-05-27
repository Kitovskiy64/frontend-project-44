#!/usr/bin/env node

import greetUser from '../src/cli.js';
import primeGame from '../src/games/prime.js';

const name = greetUser();

primeGame(name);
