const head = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr[0];
  }
};

//Exporting the head function so that it can be used elsewhere
module.exports = head;