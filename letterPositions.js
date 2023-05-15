//Function that returns an array with the index position of every letter 
const letterPositions = function(sentence) {
  const newSentence = sentence.toString().toLowerCase().split(" ").join("");
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const finalCount = {};

  for (let letter = 0; letter < newSentence.length; letter ++) {
    if (letters.includes(newSentence[letter])) {
      if (finalCount[newSentence[letter]]) {
        finalCount[newSentence[letter]].push(letter);
      } else {
        finalCount[newSentence[letter]] = [letter];
      }
    }
  } return finalCount;
};

//Export the function for use in other files
module.exports = letterPositions;