#!/usr/bin/env node

import playGame from '../src/engine.js';
import { gameDescription, generateGcdRound } from '../src/games/gcd.js';

playGame(gameDescription, generateGcdRound);
