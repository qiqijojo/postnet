'use strict';

class Router {
  constructor() {
    this.actions = {};
    this.defaultPath = 'init';
  }
  
  addAction(path, action) {
    this.actions[path] = action;
  }
  
  handle(cmd) {
    this.defaultPath = this.actions[this.defaultPath].doAction(cmd);
  }

  start() {
    this.handle();
  }
}

module.exports = Router;