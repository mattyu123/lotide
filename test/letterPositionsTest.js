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
      e: [ 1, 12 ],
      l: [ 2, 3 ],
      o: [ 4 ],
      m: [ 6, 11, 17 ],
      y: [ 7 ],
      n: [ 9 ],
      a: [ 10, 18 ],
      i: [ 14 ],
      s: [ 15 ],
      t: [ 19, 20 ]
    });
  });

  it("only tracks the index position of letters", function() {
    const sentence = "hi!!!! I am Matt!!!!!";
    assert.deepEqual(letterPositions(sentence), { 
      h: [ 0 ], 
      i: [ 1, 7 ], 
      a: [ 9, 13 ], 
      m: [ 10, 12 ], 
      t: [ 14, 15 ] });
  });
});