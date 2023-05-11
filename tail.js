//Take the first value in an array and return it
const tail = function(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return [];
  } else {
    return arr.slice(1);
  }
};

//Exporting the tail module
module.exports = tail