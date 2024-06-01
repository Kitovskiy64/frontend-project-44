#!/usr/bin/env node

import greetUser from '../src/cli.js';
import playGame from '../src/engine.js';
import { getEvenGameDescription, generateEvenRound } from '../src/games/even.js';

const name = greetUser();
playGame(getEvenGameDescription, generateEvenRound, name);
