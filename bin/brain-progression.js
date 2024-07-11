#!/usr/bin/env node

import playGame from '../src/engine.js';
import { getProgressionGameDescription, generateProgressionRound } from '../src/games/progression.js';

playGame(getProgressionGameDescription, generateProgressionRound);
