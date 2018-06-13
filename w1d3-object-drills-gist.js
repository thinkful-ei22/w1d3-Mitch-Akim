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

// 4. Arrays of objects
// 5. Properties that aren't there

// Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
// Expand on the previous example by adding a boss property to everyone except the owner of the company.
let personOne = {
  name : 'Jim',
  jobTitle : 'Sales associate',
  boss : 'Toby'
};

let personTwo = {
  name : 'Pam',
  jobTitle : 'Receptionist',
  boss: 'Toby'
};

let personThree = {
  name : 'Toby',
  jobTitle : 'HR Representative',
};
// Store these objects in an array.

let staff = [personOne, personTwo, personThree];

// Iterate over the array and use console.log to show each person's job title and name.
// Change the iteration to print out messages in this format: 
// "${title} ${name} reports to ${boss}.". For example: 
// Junior Engineer Bob reports to Fred..
let arrayLooper = function(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].boss === undefined ? 
      console.log(`${arr[i].jobTitle} ${arr[i].name} doesn't report to anybody... Except Michael.`) : 
      console.log(`${arr[i].jobTitle} ${arr[i].name} reports to ${arr[i].boss}.`);
  }
};

// What gets printed out for the owner?
// for the owner, boss = undefined

arrayLooper(staff);

// 6. Cracking the Code

// Redo your Cracking the Code problem from String Drills but this time use an object as your cipher.
let cypher = {
  a : 2,
  b : 3,
  c : 4,
  d : 5 
};
// Additionally, create a decodeWords function that utilizes your decode function to accept a
// single string of words, and then return the fully decoded message as a string.

//Iterate through cypher for matching key
//if matching key is found...
    //return value and pass through dismantler[i].charAt("matchingKEY")
//Else, return and push a ' '
let rawCode = 'craft block argon meter bells brown croon droop';

let decodeWords = function(str, obj) {
  let crackedCode = '';
  let dismantler = str.split(' ');
  for(let i = 0; i < dismantler.length; i++) {
    let tag = dismantler[i].charAt(0);
    tag in obj ? crackedCode += dismantler[i].charAt(obj[tag]-1) : crackedCode += ' ';
  }

  return crackedCode;
}

console.log(decodeWords(rawCode, cypher));

// 7. Factory Functions with LOTR



