const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

describe('head', () => {
  it("should return the first value when passed in an array", function() {
    const arr = [1,2,4,2];
    assert.equal(head(arr), 1)
  });

  it("should return 1 when passed in [1]", function() {
    const arr = [1];
    assert.equal(head(arr), 1)
  })

  it("should return undefined when passed an empty array", () => {
    const arr = [];
    assert.isUndefined(head(arr))
  })

});




//Test cases for head function
// assertEqual(head([1,2,4,2]),1);
// assertEqual(head([5,2,4,2]),5);
// assertEqual(head([2,2,4,2]),2);
// assertEqual(head([5,6,7]), 5);
// assertEqual(head([5]), 5);
// assertEqual(head([]), undefined);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
