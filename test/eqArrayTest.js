const assertEqual = require('../assertEqual');
const eqArray = require('../eqArray');

//Test cases
assertEqual(eqArray([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArray([1], [1]), true);
assertEqual(eqArray([], []), true);
assertEqual(eqArray([1], ['1']), false);
assertEqual(eqArray([1, 2, 3], [1, 2, 5]), false);
assertEqual(eqArray([1, 2, 3], [1, 2]), false);
assertEqual(eqArray([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArray([1, 2, 3], [1, 2, 3,5]), false);
assertEqual(eqArray([1, 2, 3,4], [1, 2]), false);