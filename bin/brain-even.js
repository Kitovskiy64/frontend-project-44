#!/usr/bin/env node

import playGame from '../src/engine.js';
import { gameDescription, generateEvenRound } from '../src/games/even.js';

playGame(gameDescription, generateEvenRound);
