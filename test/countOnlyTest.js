const countOnly = require("../countOnly.js");

//Importing the basic chai code
const chai = require("chai");
const assert = chai.assert;

//Test cases for countOnly
describe('countOnly', () => {
  it("should return array of only items found in the list", function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const items = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
    assert.deepEqual(countOnly(firstNames, items), { Fang: 2, Jason: 1 });
  });

  it("should return empty object if the key is not in the array", function() {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];
    const items = {"Karima": true};
    assert.deepEqual(countOnly(firstNames, items), {});
  });



});

