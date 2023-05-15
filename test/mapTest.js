const map = require("../map.js");

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

//Test cases 
describe('map', () => {
  it("should return a new array with the callback being applied to it", function() {
    assert.deepEqual(map([9, 64, 81, 121, 36], num => Math.sqrt(num)), [3,8,9,11,6]);
  });

  it("should return a new array with the callback being applied to it", function() {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word.length), [6,7,2,5,3]);
  });

  it("should return a new array with the callback being applied to it", function() {
    assert.deepEqual(map([9, 64, 81, 121, 36], num => num * 2), [18, 128, 162, 242, 72]);
  });
}); 