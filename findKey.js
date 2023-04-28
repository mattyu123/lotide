const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback){
  let counter = 0;
  
  if (counter > Object.keys(object).length){
    return undefined;
  } else {
    for (let item in object){
      if (callback(object[item])){
        return item;
      } else {
        counter += 1
      }
    }
  }
}

let object =  {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

let callback = x => x.stars === 2;

