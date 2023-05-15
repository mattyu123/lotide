const eqArray = require("../eqArray.js");

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

describe('eqArray', () => {
  it("should determine whether two arrays are equal to each other", function() {
    assert.isTrue(eqArray([1,2,3], [1,2,3]))
  });

  it("should return false if the arrays are not equal", function() {
    assert.isFalse(eqArray([1,2,3], [1]))
  });

  it("should return false if they are not same datatypes", function() {
    assert.isFalse(eqArray([1,2,3], [1,2,"3"]))
  });

  it("should determine whether two single-item arrays are equal to each other", function() {
    assert.isTrue(eqArray([1], [1]))
  });

  it("return true if passed two empty arrays", function() {
    assert.isTrue(eqArray([], []))
  });
}); 