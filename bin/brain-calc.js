#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playGame from '../src/engine.js';
import { getCalcGameDescription, generateCalcRound } from '../src/games/calc.js';

const name = greetUser();
playGame(getCalcGameDescription, generateCalcRound, name);
