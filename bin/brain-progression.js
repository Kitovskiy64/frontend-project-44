#!/usr/bin/env node
/* eslint-disable import/extensions */
import greetUser from '../src/Games/cli.js';
import progGame from '../src/Games/progressionGame.js';

const name = greetUser();

progGame(name);
