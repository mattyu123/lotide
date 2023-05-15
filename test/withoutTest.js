const without = require("../without.js")

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

//Test cases 
describe('without', () => {
  it("should return a new array with the items removed", function() {
    assert.deepEqual(without([1, 2, 3], [1]), [ 2, 3 ]);
  });

  it("should return an empty array if the main array is only one item and we have to remove it", function() {
    assert.deepEqual(without(["1"], ["1"]), [])
  })

  it("should return an empty array if passed two arrays that are identical", function() {
    assert.deepEqual(without([1, 2, 3], [1, 2, 3]), []);
  })

}); 