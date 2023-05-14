const assertArraysEqual = require("./assertArraysEqual");

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