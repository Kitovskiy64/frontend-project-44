#!/usr/bin/env node

import greetUser from '../src/cli.js';
import progGame from '../src/games/progression.js';

const name = greetUser();

progGame(name);
