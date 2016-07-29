'use strict';

const readline = require('readline-sync');
const Router = require('./actions/Router');
const WelcomeAction = require('./actions/WelcomeAction');

const mainRouter = new Router();
mainRouter.addAction('init', new WelcomeAction());
let cmd;


do {
  mainRouter.start();
  cmd = readline.question("> ");
  mainRouter.handle(cmd);
} while (true);