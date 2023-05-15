//Function takes an object and a callback and returns the first key where the callback returns a truthy value. Return undefined if no key is found
const findKey = function(object, callback) {
  let counter = 0;
  
  if (counter > Object.keys(object).length) {
    return undefined;
  } else {
    for (let item in object) {
      if (callback(object[item])) {
        return item;
      } else {
        counter += 1;
      }
    }
  }
};

module.exports = findKey;