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

const sentence = "hello"
const finalCount = {};


for (let letter = 0; letter < sentence.length; letter += 1) {
    if (finalCount[sentence[letter]]){
      finalCount[sentence[letter]].push(letter);
    } else {
      finalCount[sentence[letter]] = [letter];
    }
  }
    

console.log(finalCount);






