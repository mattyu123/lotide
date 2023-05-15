const countLetters = require("../countLetters.js")

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

//Test cases 
describe('countLetters', () => {
  it("should return a count of all the letters in the sentence", function() {
    assert.deepEqual(countLetters("hello, my name is Matt"), { h: 1, e: 2, l: 2, o: 1, m: 3, y: 1, n: 1, a: 2, i: 1, s: 1, t: 2 });
  });

  it("should return a count of all the letters in the sentence", function() {
    assert.deepEqual(countLetters("HELLO, I am Matt"), { h: 1, e: 1, l: 2, o: 1, i: 1, a: 2, m: 2, t: 2 });
  })

  it("should count only letters, not special characters", function() {
    assert.deepEqual(countLetters("HE341$%%@"), { h: 1, e: 1 });
  })

}); 
