const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(object, value){
  for (let show in object){
    let showValue = object[show];
    
    if (showValue === value){
      return show;
    }
  }
}

assertEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}, "Brooklyn Nine-Nine"),"comedy");
assertEqual(findKeyByValue({sci_fi: "The Expanse", comedy: "Brooklyn Nine-Nine", drama: "The Wire"}, "The Wire"), "drama");
assertEqual(findKeyByValue({italian: "Pizza", japanese: "sushi", american: "burger"}, "burger"), "american");