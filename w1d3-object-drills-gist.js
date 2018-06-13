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
};

objectLooper(obj);
// ^^ Using console.log to show each property name and its associated value.


//3. Arrays in Objects

//Create an object with a property called meals which is an array of strings:
let food = {
  meals: ['breakfast','second breakfast', 'elevenses', 'lunch',
    'afternoon tea', 'dinner', 'supper']
};

let fourthMeal = function(obj) {
  //Use console.log to show the name of a hobbit's fourth meal of the day.
  console.log(food.meals[3]);
};

fourthMeal(food);

//4. Arrays of objects

// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.

let personOne = {
  name : 'Jim',
  jobTitle : 'Sales associate',
};

let personTwo = {
  name : 'Pam',
  jobTitle : 'Receptionist',
};

let personThree = {
  name : 'Toby',
  jobTitle : 'HR Representative',
};
// Store these objects in an array.

let staff = [personOne, personTwo, personThree];

// Iterate over the array and use console.log to show each person's job title and name.
// console.log(staff[0].name);
let arrayLooper = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i].name + '|' + arr[i].jobTitle);
  }
};

arrayLooper(staff);

// 5. Properties that aren't there

