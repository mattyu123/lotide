const tail = require("../tail.js");

//Importing the basic chai code
const chai = require("chai");
const assert = chai.assert;

describe('tail', () => {
  it("should return all the items after the first item in an array", function() {
    const arr = [1,2,3,4];
    assert.deepEqual(tail(arr), [2,3,4]);
  });

  it("should return an empty array if there's only 1 item in an array", function() {
    const arr = [1];
    assert.deepEqual(tail(arr), []);
  });

  it("should return an empty array if there's zero items in an array", function() {
    const arr = [];
    assert.deepEqual(tail(arr), []);
  });
});

