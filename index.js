const head = require('./head.js');
const tail = require('./tail.js');
const middle = require('./middle.js');
const without = require('./without.js');
const takeUntil = require('./takeUntil.js');
const map = require('./map.js');
const letterPosition = require('./letterPositions.js');
const flatten = require('./flatten.js');
const findKeysByValue = require('./findKeyByValue.js');
const findKey = require('./findKey.js');
const countOnly = require('./countOnly.js');
const countLetters = require('./countLetters.js')

//Object with all the functions that we created 
const allFunctions = {
  head,
  tail,
  middle,
  without,
  takeUntil,
  map,
  letterPosition,
  flatten,
  findKeysByValue,
  findKey,
  countOnly,
  countLetters,
};

module.exports = allFunctions;