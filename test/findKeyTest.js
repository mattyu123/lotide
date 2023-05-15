const findKey = require("../findKey.js")

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

describe('findKey', () => {
  it("return the first key where the callback returns a truthy value", function() {
    const obj = {
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }
    assert.strictEqual(findKey(obj, x => x.stars === 2), "noma");
  });

  it("return the first key where the callback returns a truthy value", function() {
    const obj = {
      "LeBron": { championships: 4},
      "Curry": { championships: 4},
      "Jordan": { championships: 6},
      "Kobe": { championships: 5},
      "Giannis": { championships: 1},
      "Kawhi": { championships: 2}
    }
    assert.strictEqual(findKey(obj, x => x.championships >= 3), "LeBron");
  });

  it("return undefined if no key is found", function() {
    const obj = {
      "LeBron": { championships: 4},
      "Curry": { championships: 4},
      "Jordan": { championships: 6},
      "Kobe": { championships: 5},
      "Giannis": { championships: 1},
      "Kawhi": { championships: 2}
    }
    assert.isUndefined(findKey(obj, x => x.championships >= 10));
  });
}); 