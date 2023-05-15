const middle = require("../middle.js");

//Importing the basic chai code
const chai = require("chai");
const assert = chai.assert;

describe('middle', () => {
  it("should return middle two values when number of items is even", function() {
    const arr = [1,2,3,4];
    assert.deepEqual(middle(arr), [2,3]);
  });

  it("should return an empty array if passed an empty array as an argument", function() {
    const arr = [];
    assert.deepEqual(middle(arr), []);

  })

  it("should return one value when the number of items in the array is odd", function() {
    const arr = [1,2,3];
    assert.deepEqual(middle(arr), [2]);
  });

  it("should return an empty array if there's only 1 item in the array", function() {
    const arr = [1];
    assert.deepEqual(middle(arr), []);
  });

  it("should return an empty array if there's only 2 items in the array", function() {
    const arr = [1,2];
    assert.deepEqual(middle(arr), []);
  });
});