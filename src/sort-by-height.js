const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexes.push(i);
      count++;
    }
  }
  const sortArr = arr.sort(function (a, b) { return a - b });
  sortArr.splice(0, count);
  for (let i of indexes) {
    sortArr.splice(i, 0, -1);
  }
  return sortArr;
}

module.exports = {
  sortByHeight
};
