'use strict';

let currentActionName = 'init';

const actions = [{
  name: 'init',
  help: `
Welcome
1 - postcode
2 - barcode`.trim(),
  doAction(cmd) {
    switch(cmd) {
      case '1':
        currentActionName = 'postcode';
        break;
      case '2':
      default:
        console.log('Input error\n');
    }
  }
}, {
  name: 'postcode',
  help: `
Please input post code`.trim(),
  doAction(cmd) {
    console.log('I\'m converting the postcode: ' + cmd);
  }
}];

const router = {
  handle(cmd) {
    actions.find(v => v.name === currentActionName).doAction(cmd);
  },
  
  start() {
    console.log(actions.find(v => v.name === currentActionName).help);
  }
};

module.exports = router;

