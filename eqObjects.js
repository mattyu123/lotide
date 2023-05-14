//Function that compares two objects with each other to determine whether they are equal to each other or not
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let item in object1) {
      if (Array.isArray(object1[item])) {
        eqArray(object1[item], object2[item]);
      } if (object1[item] === object2[item]) {
        return true;
      }
    }
  } return false;
};

module.exports = eqObjects;