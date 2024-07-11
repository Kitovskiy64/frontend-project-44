#!/usr/bin/env node

import playGame from '../src/engine.js';
import { gameDescription, generateProgressionRound } from '../src/games/progression.js';

playGame(gameDescription, generateProgressionRound);
