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

let source = [1,2,3]
let itemsToRemove = [1,2]

let final = [];
let discard = [];

for (let i = 0; i < itemsToRemove.length; i++){
  for (let x = 0; x < source.length; x++){
      console.log(itemsToRemove[i])

    // if (itemsToRemove[i] === source[x]){
    //   discard.push(source[i]);
    // } else {
    //   final.push(source[x])
    // }
  }
} 

console.log(final);
console.log(discard);

