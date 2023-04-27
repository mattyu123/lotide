const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence){
  const newSentence = sentence.toLowerCase().split(" ").join("");
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
  const finalCount = {};

  for (letter of newSentence)
    if (letters.includes(letter)){
      if (finalCount[letter]){
        finalCount[letter] += 1;
      } else {
        finalCount[letter] = 1;
      }
    }
  return finalCount;
};

console.log(countLetters("hello, my name is Matt"));
console.log(countLetters("HELLO, I am Matt"));
console.log(countLetters("HE341$%%@"));

