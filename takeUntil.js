//Takes an array and callback, returns a new array with all items until a truthy value is returned
const takeUntil = function(array, callback) {
  let final = [];

    for (let item of array){
      if (!callback(item)){
        final.push(item);
      } else {
        break;
      }
  } return final;
}

module.exports = takeUntil;