//Function takes in an object and a value, returns the key that the value is at. If no key with the value is found, return undefined
const findKeyByValue = function(object, value) {
  for (let item in object) {
    let showValue = object[item];
    
    if (showValue === value) {
      return item;
    } 
  }
  return undefined;
};

console.log(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}, "Brooklyn Nine-Nine"))


module.exports = findKeyByValue;