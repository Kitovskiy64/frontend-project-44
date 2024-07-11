#!/usr/bin/env node

import playGame from '../src/engine.js';
import { gameDescription, generateCalcRound } from '../src/games/calc.js';

playGame(gameDescription, generateCalcRound);
