const assertEqual = require("../assertEqual.js");
const tail = require("../tail.js");

//Test cases for tail - Have to separate them out as assertEqual does not directly test whether an array of values equals another array of values
const result = tail([1,2,3,4]);
assertEqual(result.join(","), "2,3,4");

//Test case 1
const result1 = tail([1]);
assertEqual(result1.length,[].length);

//Test case 2
const result2 = tail([]);
assertEqual(result2.length,[].length);



