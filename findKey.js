const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  let counter = 0;
  
  if (counter > Object.keys(object).length) {
    return undefined;
  } else {
    for (let item in object) {
      if (callback(object[item])) {
        return item;
      } else {
        counter += 1;
      }
    }
  }
};

//Test Cases
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "LeBron": { championships: 4},
  "Curry": { championships: 4},
  "Jordan": { championships: 6},
  "Kobe": { championships: 5},
  "Giannis": { championships: 1},
  "Kawhi": { championships: 2}
}, x => x.championships >= 3), "LeBron");

assertEqual(findKey({
  "Rent": { cost: 2000},
  "Food": { cost: 500},
  "Phone": { cost: 70},
  "Hydro": { cost: 50},
  "Drinks": { cost: 100},
  "Entertainment": { cost: 200}
}, x => (x.cost / 2) >= 500), "Rent");