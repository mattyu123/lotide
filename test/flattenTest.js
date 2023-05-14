const flatten = require("../flatten.js");

//Importing the basic chai code
const chai = require("chai");
const assert = chai.assert;

//Test cases
describe('flatten', () => {
  it("should return a single array with all the items from the nested array", function() {
    const arr = [1, 2, [3, 4], 5, [6]];
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6]);
  });

  it("should return a single array with all the items from the nested array", function() {
    const arr = [1, 2, [3, 4, 5, 6, 7], 8, [9],[10, 11]];
    assert.deepEqual(flatten(arr), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  });

  it("should return a single array with all the items from the nested array, even if they're different data types", function() {
    const arr = [1, 2, ["3", 4], "5", [6]];
    assert.deepEqual(flatten(arr), [1, 2, "3", 4, "5", 6]);
  });
});