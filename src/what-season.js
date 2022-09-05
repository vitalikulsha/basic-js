const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */

function getSeason(date) {
  const seasons = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  if (!arguments[0]) {
    return 'Unable to determine the time of year!';
  }
  if (Object.prototype.toString.call(date) === "[object Date]") {
    try {
      date.valueOf();
      return seasons[date.getMonth()];
    } catch (err) {
      console.log('error');
      throw new Error('Invalid date!');
    }
  } else {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};
