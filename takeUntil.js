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

const takeUntil = function(array, callback) {
  let final = [];

    for (let item of array){
      if (!callback(item)){
        final.push(item);
      } else {
        break;
      }
  } return final;
}

assertArraysEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5], x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood']);
assertArraysEqual(takeUntil([1, 25, 45, 7, 22, -41, 2, 4, 5], x => x > 20), [1]);
assertArraysEqual(takeUntil([1, 2, 4, 7, 2, 1, 2, 4, 45], x => x > 20), [1, 2, 4, 7, 2, 1, 2, 4]);
