#!/usr/bin/env node

import greetUser from '../src/cli.js';
import gcdGame from '../src/games/gcd.js';

const name = greetUser();

gcdGame(name);
