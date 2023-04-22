const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const head = function(arr) { 
  if (arr.length === 0){
    return undefined;
  } else {
      return arr[0];
  }
}

assertEqual(head([1,2,4,2]),1);
assertEqual(head([5,2,4,2]),5);
assertEqual(head([2,2,4,2]),2);
assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
