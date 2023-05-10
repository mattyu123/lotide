const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArray');

//Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], ['1']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 5]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, '3']), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,5]), false);
assertEqual(eqArrays([1, 2, 3,4], [1, 2]), false);