const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  console.log(members);
  if (!Array.isArray(members)) {
    return false;
  }
  const symbols = [];
  for (let name of members) {
    if (typeof name === 'string') {
      symbols.push(name.trim().charAt(0).toUpperCase());
    }

  }
  return symbols.sort().join('');
}

module.exports = {
  createDreamTeam
};

