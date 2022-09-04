const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const additionSeparator = options.additionSeparator || '|';
  const additionRepeatTimes = options.additionRepeatTimes || 1;  
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additionArr = [];
  for (let i = 0; i < additionRepeatTimes; i++){
      additionArr.push(addition);
  }
  const newAddition = additionArr.join(additionSeparator);
  
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const resultArray = [];
  for (let i = 0; i < repeatTimes; i++){
    resultArray.push(str + newAddition);
  }
  return resultArray.join(separator);
}

module.exports = {
  repeater
};
