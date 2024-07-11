#!/usr/bin/env node

import playGame from '../src/engine.js';
import { getCalcGameDescription, generateCalcRound } from '../src/games/calc.js';

playGame(getCalcGameDescription, generateCalcRound);
