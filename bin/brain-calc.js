#!/usr/bin/env node

import greetUser from '../src/Games/cli.js';
import calcGame from '../src/Games/calcGame.js';

const name = greetUser();

calcGame(name);
