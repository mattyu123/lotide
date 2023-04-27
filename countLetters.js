const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(sentence){
  let newSentence = sentence.split(" ").join("");
  
  const finalCount = {};

  for (letter of newSentence)
    if (finalCount[letter]){
      finalCount[letter] += 1;
    } else {
      finalCount[letter] = 1;
    }
  return finalCount;
};

console.log(countLetters("hello, my name is Matt"))

