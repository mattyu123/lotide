const findKeyByValue = require("../findKeyByValue.js");

//Importing the basic chai code
const chai = require("chai");
const assert = chai.assert;

//Test cases
describe('findKeyByValue', () => {
  it("return the key of the first item in the array that matches the given argument", function() {
    const shows = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"};
    assert.equal(findKeyByValue(shows, "Brooklyn Nine-Nine"), "comedy");
  });

  it("return the key of the first item in the array that matches the given argument", function() {
    const shows = {sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"};
    assert.equal(findKeyByValue(shows, "The Wire"), "drama");
  });

  it("return undefined if the value is not found in the object", function() {
    const cuisines = {italian: "Pizza", japanese: "sushi", american: "burger"};
    assert.isUndefined(findKeyByValue(cuisines, "pasta"));
  });
});