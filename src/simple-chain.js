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
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
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

module.exports = {
  chainMaker
};
