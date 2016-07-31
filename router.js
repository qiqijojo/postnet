'use strict';
const obj = require("./core/converter");
let currentActionName = 'init';

const actions = [{
  name: 'init',
  help: `
Welcome
1 - postcode
2 - barcode
3 - quit`.trim(),
  doAction(cmd) {
    switch(cmd) {
      case '1':
        currentActionName = 'postcode';
        break;
      case '2':
        currentActionName = 'barcode';
            break;
      case '3':
        currentActionName = 'quit';
            break;
      default:
        console.log('Input error\n');
            break;
    }
  }
}, {
  name: 'postcode',
  help: `
Please input post code`.trim(),
  doAction(cmd) {
    console.log('The postcode is: ' + cmd);
    console.log('The result of postcode to barcode is:' + obj.transformToBarCode(cmd));
    currentActionName = "init";
  }
},{
  name:'barcode',
  help:`
Please input barcode`.trim(),
  doAction(cmd){
    console.log('The barcode is:' + cmd);
    console.log('The result of barcode to postcode is:' + obj.transformToZipCode(cmd));
    currentActionName = "init";
  }
},{
  name:'quit',
  help:`
Weather you want to exit this interface!(yes/no)`.trim(),
  doAction(cmd){
  console.log('Your choice is :' + cmd);
  if(cmd === "yes"){
    console.log("退出");
    process.exit();
  }
    currentActionName = "init";
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

