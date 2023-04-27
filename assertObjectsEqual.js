const eqObjects = function(object1, object2){
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let item in object1){
      if (Array.isArray(object1[item])){
        eqArrays(object1[item], object2[item])
      } if (object1[item] === object2[item]){
        return true;
      } 
    } 
  } return false;
}

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; 
  
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} != ${inspect(expected)}`);
  }
};

