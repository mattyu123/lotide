const takeUntil = require("../takeUntil.js")

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

//Test cases 
describe('takeUntil', () => {
  it("return all values until a truthy value is returned", function() {
    const arr = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    assert.deepEqual(takeUntil(arr, x => x < 0), [ 1, 2, 5, 7, 2 ]);
  });

  it("return all values until a truthy value is returned, with strings", function() {
    const arr = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    assert.deepEqual(takeUntil(arr, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood'])
  })

  it("return all values until a truthy value is returned", function() {
    const arr = [1, 25, 45, 7, 22, -41, 2, 4, 5];
    assert.deepEqual(takeUntil(arr, x => x > 20), [1])
  })

  it("return all items in array if they're all present", function() {
    const arr = [1, 2, 4, 7, 2, 1, 2, 4, 45];
    assert.deepEqual(takeUntil(arr, x => x > 200), arr)
  })
}); 

