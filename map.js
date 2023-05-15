//Function takes an array and callback and the array with the callback being applied to each one
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Export the module for use in different file
module.exports = map;