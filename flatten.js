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

const assertArraysEqual = function(test, expected) {
  if (eqArrays(test, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${test} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${test} != ${expected}`);
  }
};

const flatten = function(array){
  let final = [];

  for (let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
      for (let x = 0; x < array[i].length; x++){
        final.push(array[i][x]);
      }
    } else {
      final.push(array[i]);
    }
  } return final;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([1, 2, [3, 4, 5, 6, 7], 8, [9],[10, 11]]),[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
assertArraysEqual(flatten([1, 2, ["3", 4], "5", [6]]),[1, 2, "3", 4, "5", 6]);

module.exports = flatten;