const letterPositions = require("../letterPositions.js");

//Importing the basic chai code
const chai = require("chai");
const assert = chai.assert;

//Test cases
describe('letterPositions', () => {
  it("return the index position where each letter is found in a word", function() {
    const sentence = "hello";
    assert.deepEqual(letterPositions(sentence), { h: [ 0 ], e: [ 1 ], l: [ 2, 3 ], o: [ 4 ] });
  });

  it("the index position should still be returned in a sentence", function() {
    const sentence = "hello my name is Matt";
    assert.deepEqual(letterPositions(sentence), {
      h: [ 0 ],
      e: [ 1, 10 ],
      l: [ 2, 3 ],
      o: [ 4 ],
      m: [ 5, 9, 13 ],
      y: [ 6 ],
      n: [ 7 ],
      a: [ 8, 14 ],
      i: [ 11 ],
      s: [ 12 ],
      t: [ 15, 16 ]
    });
  });

  it("only tracks the index position of letters", function() {
    const sentence = "hi!!!! I am Matt!!!!!";
    assert.deepEqual(letterPositions(sentence), { 
      h: [ 0 ], 
      i: [ 1, 6 ], 
      a: [ 7, 10 ], 
      m: [ 8, 9 ], 
      t: [ 11, 12 ]});
  });
});