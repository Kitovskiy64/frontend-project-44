#!/usr/bin/env node

import greetUser from '../src/Games/cli.js';
import gcdGame from '../src/Games/gcdGame.js';

const name = greetUser();

gcdGame(name);
