#!/usr/bin/env node

import playGame from '../src/engine.js';
import { getGcdGameDescription, generateGcdRound } from '../src/games/gcd.js';

playGame(getGcdGameDescription, generateGcdRound);
