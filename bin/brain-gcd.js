#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playGame from '../src/engine.js';
import { getGcdGameDescription, generateGcdRound } from '../src/games/gcd.js';

const name = greetUser();
playGame(getGcdGameDescription, generateGcdRound, name);

