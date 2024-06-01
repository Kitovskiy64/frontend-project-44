#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playGame from '../src/engine.js';
import { getProgressionGameDescription, generateProgressionRound } from '../src/games/progression.js';

const name = greetUser();
playGame(getProgressionGameDescription, generateProgressionRound, name);

