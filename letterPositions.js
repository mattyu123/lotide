const eqArrays = function(arr1, arr2) {
  let total = arr1.length - 1;
  let counter = 0;

  if (arr1.length === 0 && arr2.length === 0) {
    return true;
  } else if (arr1.length !== arr2.length) {
    return false;
  } else {
    while (counter <= total) {
      for (let i = 0; i <= total; i++) {
        if (arr1[i] === arr2[i]) {
          counter += 1;
        } else {
          return false;
        }
      } return true;
    }
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} != ${array2}`);
  }
};

const letterPositions = function(sentence) {
  const newSentence = sentence.toLowerCase().split(" ").join("");
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const finalCount = {};

  for (let letter = 0; letter < newSentence.length; letter += 1) {
    if (letters.includes(newSentence[letter])) {
      if (finalCount[newSentence[letter]]) {
        finalCount[newSentence[letter]].push(letter);
      } else {
        finalCount[newSentence[letter]] = [letter];
      }
    }
  } return finalCount;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2,3]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("hello, my name is Matt").e, [1,11]);
assertArraysEqual(letterPositions("hello, my name is Matt").o, [4]);
assertArraysEqual(letterPositions("hello, my name is Matt").m, [6, 10, 14]);

module.exports = letterPositions;