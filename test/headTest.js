const assertEqual = require("../assertEqual.js");
const head = require("../head.js");


assertEqual(head([1,2,4,2]),1);
assertEqual(head([5,2,4,2]),5);
assertEqual(head([2,2,4,2]),2);
assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
