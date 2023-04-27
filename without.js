const eqArrays = function(array1, array2) {
  let total = array1.length - 1;
  let counter = 0;

  if (array1.length === 0 && array2.length === 0) {
    return true;
  } else if (array1.length !== array2.length) {
    return false;
  } else {
    while (counter <= total) {
      for (let i = 0; i <= total; i++) {
        if (array1[i] === array2[i]) {
          counter += 1;
        } else {
          return false;
        }
      } return true;
    }
  }
};

const assertArraysEqual = function(testValue, expectedValue) {
  if (eqArrays(testValue, expectedValue)) {
    console.log(`✅✅✅ Assertion Passed: ${testValue} === ${expectedValue}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${testValue} != ${expectedValue}`);
  }
};


const without = function(source,itemsToRemove) {
  let final = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      final.push(source[i]);
    }
  } return final;
};

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);
assertArraysEqual(without(["1"], ["1"]), []);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), []);

//Test case to ensure that a new array is being returned, and that the original array is not being modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

