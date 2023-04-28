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

const map = function(array, callback){
  const results = [];

  for (let item of array) {
    results.push(callback(item))
  }
  return results;
}

//Test cases written below
assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word.length), [6,7,2,5,3]);
assertArraysEqual(map([9, 64, 81, 121, 36], num => Math.sqrt(num)), [3,8,9,11,6]);
assertArraysEqual(map([9, 64, 81, 121, 36], num => num*2), [18, 128, 162, 242, 72]);   
