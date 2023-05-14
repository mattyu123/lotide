//function that accepts an array with nested arrays in it and returns a single array
const flatten = function(array){
  let final = [];

  for (let i = 0; i < array.length; i++){
    if (Array.isArray(array[i])){
      for (let x = 0; x < array[i].length; x++){
        final.push(array[i][x]);
      }
    } else {
      final.push(array[i]);
    }
  } return final;
}

module.exports = flatten;