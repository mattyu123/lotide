const middle = function(array){
  let index1 = (array.length/2) - 1;
  let index2 = (array.length/2);
  let final = [];

  if (array.length === 1 || array.length === 2){
    return [];
  } else if (array.length % 2 !== 0){
      final.push(array[Math.floor(array.length / 2)])
      return final;
    } else {
      return [array[index1], array[index2]];
  }
};

module.exports = middle;