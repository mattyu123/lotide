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

const middle = function(array){
  let index1 = (array.length/2) - 1;
  let index2 = (array.length/2);
  let final = [];

  if (array.length === 1 || array.length === 2){
    return [];
  } else if (array.length % 2 !== 0){
      final.push(array[Math.floor(array.length / 2)])
      return final;
    } else {
      return [array[index1], array[index2]];
  }
}


assertArraysEqual(middle([1, 2, 3, 4]),[2,3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]);
assertArraysEqual(middle([1, 2, 3]),[2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1,2]),[]);



