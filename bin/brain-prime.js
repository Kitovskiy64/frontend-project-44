#!/usr/bin/env node

import playGame from '../src/engine.js';
import { gameDescription, generatePrimeRound } from '../src/games/prime.js';

playGame(gameDescription, generatePrimeRound);
