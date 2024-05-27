#!/usr/bin/env node

import greetUser from '../src/Games/cli.js';
import progGame from '../src/Games/progressionGame.js';

const name = greetUser();

progGame(name);
