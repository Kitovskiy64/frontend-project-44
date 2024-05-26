#!/usr/bin/env node
/* eslint-disable import/extensions */
import greetUser from '../src/Games/cli.js';
import evenGame from '../src/Games/evenGame.js';

const name = greetUser();

evenGame(name);
