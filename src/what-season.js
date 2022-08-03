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

console.log(date)
console.log(Date.prototype.isPrototypeOf(date) );


if(!Date.prototype.isPrototypeOf(date) || typeof date.getMonth !== 'function'){
    console.log('error: Invalid date!');
    throw new Error('Invalid date!');
  }
  /*
  if(isNaN(Date.parse(date))){
    console.log('error')
    throw new Error('Invalid date!');
  }*/
  const month = date.getMonth();
  return seasons[month];
}
/*
const deeperFakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  getMonth() {
      return Date.prototype.getMonth.call(new Date());
  },
  getFullYear() {
      return Date.prototype.getFullYear.call(new Date(1994, 1, 2, 3, 4, 5));
  },
  getDate() {
      return Date.prototype.getDate.call(new Date(2020, 0, 3, 4, 5, 6));
  },
  getHours() {
      return Date.prototype.getHours.call(new Date(1978, 2, 4, 5, 6, 7));
  },
  getMinutes() {
      return Date.prototype.getMinutes.call(new Date(202, 3, 5, 6, 7, 8));
  },
  getSeconds() {
      return Date.prototype.getSeconds.call(new Date(1, 4, 6, 7, 8, 9));
  },
  getMilliseconds() {
      return Date.prototype.getMilliseconds.call(new Date(2019, 7, 8, 9, 10, 11));
  },
  getDay() {
      return Date.prototype.getDay.call(new Date(1812, 8, 9, 10, 11, 12));
  },
  [Symbol.toStringTag]: 'Date'
};
Object.setPrototypeOf(deeperFakeDate, Object.getPrototypeOf(new Date()));

const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};
Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

getSeason(fakeDate);
getSeason(deeperFakeDate);
getSeason(new Date(79, 6, 8, 5, 34, 23, 738));
getSeason(new Date(2025, 1, 22, 23, 45, 11, 500));*/


module.exports = {
  getSeason
};
