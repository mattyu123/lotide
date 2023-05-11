# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @matty123/lotide`

**Require it:**

`const _ = require('@matty123/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `head()`: Returns the first item in an array, returns undefined if the array is empty 
* `tail()`: Return every item after the first item in the array
* `middle()`: Returns the middle elements in an array. Returns a single value if there's an odd number of elements in an array, return two middle most values if there's an even number of elements in an array
* `without()`: Takes two parameters, a source array and an array with items to remove. Function will return a new source array with the specified items removed 
* `takeUntil()`: Takes an array and a callback function. The items in the array will get passed into the callback function until a truthy value is returned
* `map()`: Accepts an array and a callback function. A new array will be returned with the callback function being called on every item in the array 
* `letterPosition()`: Takes a sentence and returns an array containing the indices in the sentence where the letter is found 
* `flatten()`: Takes an array with nested values, and returns a single array containing all the values 
* `findKeysByValue()`: Takes in an object and a value and returns the first key that contains the given value
* `findKey()`: Takes an object and a callback function as paramaters, it will scan the object and return the first key of the callback that returns a truthy value. Returns undefined if no key is found 
* `countOnly()`: Takes an object and a collection of items to return, and returns a count of the number of times the item appears in the object 
* `countLetters()`: Accepts a sentence as a parameter, and returns the count of the number of letters in the sentence 