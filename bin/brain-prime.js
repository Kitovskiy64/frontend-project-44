#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playGame from '../src/engine.js';
import { getPrimeGameDescription, generatePrimeRound } from '../src/games/prime.js';

const name = greetUser();
playGame(getPrimeGameDescription, generatePrimeRound, name);
