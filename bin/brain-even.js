#!/usr/bin/env node

import greetUser from '../src/cli.js';
import evenGame from '../src/games/even.js';

const name = greetUser();

evenGame(name);
