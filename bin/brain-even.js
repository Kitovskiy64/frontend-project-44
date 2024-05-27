#!/usr/bin/env node

import greetUser from '../src/Games/cli.js';
import evenGame from '../src/Games/evenGame.js';

const name = greetUser();

evenGame(name);
