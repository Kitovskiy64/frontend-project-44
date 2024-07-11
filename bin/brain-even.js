#!/usr/bin/env node

import playGame from '../src/engine.js';
import { getEvenGameDescription, generateEvenRound } from '../src/games/even.js';

playGame(getEvenGameDescription, generateEvenRound);
