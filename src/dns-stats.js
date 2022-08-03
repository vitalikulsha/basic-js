const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const DNS = {};
  let maxLength = 0;
  for (let dns of domains) {
    let arr = dns.split('.');
    maxLength = arr.length > maxLength ? arr.length : maxLength;
    for (let key of arr) {
      DNS[key] = key in DNS ? DNS[key] + 1 : 1;
    }
  }
  for (let dns of domains) {
    let arr = dns.split('.').reverse();
    if (arr.length === maxLength) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] in DNS) {
          let dnsKey = '';
          for (let k = 0; k <= i; k++) {
            dnsKey = dnsKey + '.' + arr[k];
          }
          if (arr[i] !== dnsKey) {
            Object.defineProperty(DNS, dnsKey,
              Object.getOwnPropertyDescriptor(DNS, arr[i]));
            delete DNS[arr[i]];
          }
        }
      }
    }
  }
  return Object.keys(DNS).sort().reduce((r, k) => (r[k] = DNS[k], r), {});
}

module.exports = {
  getDNSStats
};
