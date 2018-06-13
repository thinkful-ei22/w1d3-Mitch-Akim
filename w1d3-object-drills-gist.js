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
};

console.log(decodeWords(rawCode, cypher));

// 7. Factory Functions with LOTR

// Write a factory function called createCharacter that could appropriately build characters
function createCharacter(name, nickName, race, origin, attack, defense, weapon) {
  return {
    name, nickName, race, origin, attack, defense, weapon, 
    //Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."
    describe: function() {
      return `${name} is a ${race} from ${origin} who uses a ${weapon}.`;
    },
    // Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.
    evaluateFight: function(enemy) {
      return `Your opponent takes ${this.attack < enemy.defense ? 0 : this.attack - enemy.defense} damage and you receive ${enemy.attack < this.defense ? 0 : enemy.attack-this.defense} damage.`;
    }
  };
}

//Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.
let characters = [createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6, 'wizard staff'), 
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1, 'the Ring'),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2, 'Sting and Barrow Blade'),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8, 'Anduril'),
  createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5, 'Bow and Arrow') ];

//Add a new character to characters (make up any attributes not provided): Arwen Undomiel is a Half-Elf of Rivendell
characters.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 0, 11, 'Hadhafang'));

//Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.\
function isAragorn(input) {
  return input.nickName === 'aragorn';
}

console.log(characters.find(isAragorn).describe());

//Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.
function filterByHobbits(input) {
  return input.race === 'Hobbit';
}

let hobbits = characters.filter(filterByHobbits);
console.log(hobbits);

//Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.
function filterByAttack(input) {
  return input.attack > 5;
}

let highAttack = characters.filter(filterByAttack);
console.log(highAttack);
//console.log(characters);

