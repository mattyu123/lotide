//Takes in an array along with an array of items to remove. Should return a new array with the items removed
const without = function(source,itemsToRemove) {
  let final = [];

  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      final.push(source[i]);
    }
  } return final; 
};

console.log(typeof (without([1, 2, 3], [1]), [2, 3]))

module.exports = without;