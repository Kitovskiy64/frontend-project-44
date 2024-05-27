#!/usr/bin/env node

import greetUser from '../src/cli.js';
import calcGame from '../src/games/calc.js';

const name = greetUser();

calcGame(name);
