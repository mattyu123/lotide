const eqObjects = require("../eqObjects.js");

//Importing the basic chai code 
const chai = require("chai");
const assert = chai.assert;

describe('eqObjects', () => {
  it("two objects that are the same should equal each other", function() {
    const obj1 = { color: "red", size: "medium" };
    const obj2 = { size: "medium", color: "red" };
    assert.isTrue(eqObjects(obj1, obj2));
  });

  it("two objects that are not the same should not equal each other", function() {
    const obj1 = { color: "red", size: "medium" };
    const obj2 = { size: "medium", color: "red", sleeveLength: "long" };
    assert.isFalse(eqObjects(obj1, obj2));
  });

  it("objects with arrays that are different should not evaluate to true", function() {
    const obj1 = { colors: ["red", "blue"], size: "medium" };
    const obj2 = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assert.isFalse(eqObjects(obj1, obj2));
  });
});