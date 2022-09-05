const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  tabulaRecta = [];
  
  isReverse;
  
  constructor(isReverse){
    this.createTable();
    if(isReverse || arguments[0] === undefined){
      this.isReverse = false;
    } else {
      this.isReverse = true;
    }
    
  }
  
  encrypt(str, key) {
    if(arguments[0] === undefined || arguments[1] === undefined ){
      throw new Error('Incorrect arguments!');
    }  
    const fullKey = key.padEnd(str.length, key).toUpperCase();
    let encryptArr = [];
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(this.tabulaRecta[0].includes(str.toUpperCase().charAt(i))){
        const rowIndex = fullKey.charCodeAt(i - count) - 65;
        const columnIndex = str.toUpperCase().charCodeAt(i) - 65;        
        encryptArr.push(this.tabulaRecta[rowIndex][columnIndex]);        
      } else {
        encryptArr.push(str[i]);
        count++;
      }
    }
    if(this.isReverse){
      encryptArr = encryptArr.reverse();
    }
    return encryptArr.join('');
  }
  
  decrypt(str, key) {
    if(arguments[0] === undefined || arguments[1] === undefined ){
      throw new Error('Incorrect arguments!');
    }
    if(this.isReverse){
      str = str.split('').reverse().join('');
    }
    const fullKey = key.padEnd(str.length, key).toUpperCase();
    let decryptArr = [];
    let count = 0;
    for(let i = 0; i < str.length; i++){
      if(this.tabulaRecta[0].includes(str.toUpperCase().charAt(i))){
        const rowIndex = fullKey.charCodeAt(i - count) - 65;
        const columnIndex = this.tabulaRecta[rowIndex].indexOf(str[i]);
        decryptArr.push(this.tabulaRecta[0][columnIndex]);        
      } else {
        decryptArr.push(str[i]);
        count++;
      }
    }    
    return decryptArr.join('');
  }
  
  createTable(){
    for(let i = 0; i < 26; i++){
      this.tabulaRecta[i] = [];
    }
    const tabulaRectaRow = [];
    for(let i = 65; i <= 90; i++){
      tabulaRectaRow.push(String.fromCharCode(i));
      this.tabulaRecta[0].push(String.fromCharCode(i));
    }
    for(let i=0; i < tabulaRectaRow.length - 1; i++){
      let symbol = tabulaRectaRow[0];
      tabulaRectaRow.splice(0, 1);
      tabulaRectaRow.push(symbol);
      for(let j = 0; j < tabulaRectaRow.length; j++){
        this.tabulaRecta[i + 1].push(tabulaRectaRow[j]);
      } 
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
