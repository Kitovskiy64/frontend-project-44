#!/usr/bin/env node

import playGame from '../src/engine.js';
import { getPrimeGameDescription, generatePrimeRound } from '../src/games/prime.js';

playGame(getPrimeGameDescription, generatePrimeRound);
