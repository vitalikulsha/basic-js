const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain:[],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push('( ' + String(value) + ' )');
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position < 1 || position > this.chain.length){
      throw new Error('You can\'t remove incorrect link!');
      //throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let currentChain = this.chain;
    this.chain = [];
    return currentChain.join('~~');
  }
};
/*
module.exports = {
  chainMaker
};*/
let str1 = chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain();
let str2 = '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )';
console.log(str1 == str2)