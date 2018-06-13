'use strict';

// Akim & Mitch object drills exercises from the gist - w1d3

// 1. Object initializers and methods

// Create an object called loaf using an object initializer ({}) 
// with two properties: flour, which should be set to 300 and water 
// which should be set to 210.
let loaf = { 
  flour: 300, 
  water: 210, 
  // Add an empty method to the loaf object called hydration.
  // Fill in the body of the method to return the hydration of the loaf 
  // (the water divided by the flour multiplied by 100).
  hydration: function () {
    return (this.water / this.flour) * 100;
  }
};
//Use console.log to print the flour and water properties.
console.log(loaf.flour + ' ' + loaf.water);
//Call the hydration method and use console.log to print the result.
console.log(loaf.hydration());

// 2. Iterating over an object's properties

// Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.

let obj = {
  foo : 1,
  bar : 2,
  fum : 3,
  quux : 4,
  spam : 5
};
// Loop over the object using for ... in

let objectLooper = function(obj) {
  for(let key in obj) {
    console.log(key + ' ' + obj[key]);
  }
}

objectLooper(obj);
// ^^ Using console.log to show each property name and its associated value.


//3. Arrays in Objects

