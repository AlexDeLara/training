// Variables
var x = 3;                                      // variable declaration can be overwritten without an error with var
let camper = "James";                           // variable can only be declared once with let. The variable exists only in the block of context it was defined
const VARNAME = "This is a read only var"       // const variables are read only. OBjects will still be mutable
// To prevent a variable from changing use:
Object.freeze(VARNAME);
var image = new Image("image.png")              // new: Make an object
globalVar = 5;                                  // global vars are created withput the var, let or const

let sum = 0;

function addSum(num) {
  sum = sum + num;  // This updates the global var
}

addSum(3);

// Functions
function square(x) {
    var ans = x * x;
    return ans;
}

var y = square(4);

// Loops
for (var pixel of img.values()) {
    var newG = 255 - pixel.getGreen();
    pixel.setGreen(newG);
}

for (let k=1; k<=10; k++) {

}

let i = 0;
while (i <= 5) {
    console.log(i);
    i++;
}

const theArray = [];
let j = 0;

do { // The first do statement will occur no matter what
  theArray.push(i);
  j++;
} while (j < 5);

// Conditionals
if (x , y) {
    z = 2;
}
else if(z) {
    a = y + 1;
    y = x - 3;
}
else {
    a = 2;
}
// Conditional in one line (ternary operator)
//The syntax is a ? b : c, where a is the condition, b is the code to run when the condition returns true, and c is the code to run when the condition returns false.
a > b ? "a is greater" : "b is greater or equal";

(a === b) ? "a and b are equal" 
: (a > b) ? "a is greater" 
: "b is greater";


// SWITCH CASE
switch(val) {
    case 1:
    case 2:
    case 3:
        result = "1, 2, or 3";
        break;
    case 4:
        result = "4 alone";
    default:
     answer = "wrong";
}

//Increase or decrease count by 1
myVar++;
myVar--;

//Increase by more than 1
myVar += 5;

//Use string " literal
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";

/* 

Code	Output
\'	single quote
\"	double quote
\\	backslash
\n	newline
\r	carriage return
\t	tab
\b	word boundary
\f	form feed

*/

// ARRAYS
// Declaration
const myArray = ["a", 5];

// Append elements at the end
const arr1 = [1, 2, 3];
arr1.push(4);
// Append elements at the start
const arr2 = ["Stimpson", "J", "cat"];
arr2.unshift("Happy");

// Remove last element
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
// Remove first element
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();

// Check if element in array
[1,2].includes(n)

// OBJECTS
// Declaration
const anotherObject = {
    make: "Ford",
    5: "five",          // JS will automatically cast non-string properties to string
    "model": "focus"
  };

// Properties access
anotherObject.make
anotherObject["make"]

// Add properties to existing objects
anotherObject.random = "random";

// Delete properties from objects
delete anotherObject.random;

// Check if object property exists
myObj.hasOwnProperty("top");

// STRINGS
// Strings are immutable

// String length
"Find a string length".length

// FUNCTIONS
// Declaration
function plusThree(num) {
    return num + 3;
  }
  
  const answer = plusThree(5);

// Operators
/*
== Will try to convert both sides to the same data type
=== Will not try the previous converstion. Example

3 == '3' // true
3 ===  3  // true
3 === '3' // false

The same is available for inequality operatiors
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true

AND &&
OR ||

*/

// RECURSION
/*
Note: Recursive functions must have a base case when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.
*/
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }

  // BUILT IN FUNCTIONS
Math.random(); // Will return a random number from 0 to 1 (not inclusive)
Math.floor(Math.random() * (max - min + 1)) + min // Generates random whole numbers within a range

typeof varName;

// Converts string into integer
const a = parseInt("007");
// The radix variable says that 11 is in the binary system, or base 2. This example converts the string 11 to an integer 3.
const b = parseInt("11", 2);

// ARROW FUNCTIONS
const myFunc1 = function() {
    const myVar = "value";
    return myVar;
  }

const myFunc2 = () => {
    const myVar = "value";
    return myVar;
  }

// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code. 
const myFunc3 = () => "value";

// Arrow function parameters can be omitted when there's just one
const doubler1 = (item) => item * 2;
const doubler2 = item => item * 2;

// Multiple args can be passed
const multiplier = (item, multi) => item * multi;

// Rest parameter to pass a variable number of parameters
function howMany(...args) {
    return "You have passed " + args.length + " arguments.";
  }
  console.log(howMany(0, 1, 2));

// Spread operator. Unpacks array into comma separated values
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);

// Use destructuring assignment to extract and assign multiple values from objets at the same time
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };

const {today, tomorrow} = HIGH_TEMPERATURES;

// Destructuring assignment with new variable names
const user1 = { name: 'John Doe', age: 34 };
const { name: userName, age: userAge1 } = user1;

// Destructuring assignment with nested properties
const user2 = {
    johnDoe: { 
      age: 34,
      email: 'johnDoe@freeCodeCamp.com'
    }
  };

const { johnDoe: { age: userAge2, email: userEmail }} = user2;

// Destructuring assignment to extract values from arrays
const [a1, b1,,, c1] = [1, 2, 3, 4, 5, 6];
console.log(a1, b1, c1); // The console will display the values of a, b, and c as 1, 2, 5.

// Destructuring assignment with rest parameter
const source = [1,2,3,4,5,6,7,8,9,10];
const [,,...arr3] = source; // Copy of source without the first two elements

// Destructuring assignment on objects as parameters
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };

const half = ({max, min}) => (max + min) / 2.0; 

// TEMPLATE LITERALS
// Allow for multi line strings, and placeholders
// Uses backticks and not quotes
const person = {
    name: "Zodiac Hasbro",
    age: 56
  };
  
  const greeting = `Hello, my name is ${person.name}!
  I am ${person.age} years old.`;
  
  console.log(greeting);

// Object property shorthand to return objects and eliminate redundancy in arrow functions
const getMousePosition1 = (x, y) => ({
    x: x,
    y: y
  });

const getMousePosition2 = (x, y) => ({ x, y });

// New function definition in ES6
const person1 = {
    name: "Taylor",
    sayHello: function() {
      return `Hello! My name is ${this.name}.`;
    }
  };

const person2 = {
    name: "Taylor",
    sayHello() {
      return `Hello! My name is ${this.name}.`;
    }
  };


// New object declaration
var SpaceShuttle = function(targetPlanet){
    this.targetPlanet = targetPlanet;
  }
  var zeus = new SpaceShuttle('Jupiter');

class SpaceShuttle {    // Use class keyword as a notation best practice
    constructor(targetPlanet) { // The constructor is invoked when new is invoked
      this.targetPlanet = targetPlanet;
    }
  }
  const zeus = new SpaceShuttle('Jupiter'); // new keyword is reserved for creating new instances of an object

// GETTERS AND SETTERS
class Book {
    constructor(author) {
      this._author = author;
    }
    // getter
    get writer() {
      return this._author; // It is a good practice to preced private variables with _
    }
    // setter
    set writer(updatedAuthor) {
      this._author = updatedAuthor;
    }
  }
  const novel = new Book('anonymous');
  console.log(novel.writer);
  novel.writer = 'newAuthor';
  console.log(novel.writer);

  class Thermostat {
    constructor(fahrenheit) {
      this._fahrenheit = fahrenheit;
    }
  
    get temperature() {
      return 5/9 * (this._fahrenheit - 32);
    }
  
    set temperature(updateCelcius) {
      this._fahrenheit = updateCelcius * 9.0 / 5 + 32;
    }
  }

// JAVASCRIPT + HTML
// To import a script
<script type="module" src="filename.js"></script>

// To export functions to use in other JS files
const add = (x, y) => {
    return x + y;
  }

export { add, subtract }; // Are custom functions

// To import them into another file
import { add, subtract } from './math_functions.js';

// To import everything
import * as stringFunctions from "./math_functions.js";

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");

// DEFAULT EXPORT AND IMPORT

export default function add1(x, y) { // Only one default per script
    return x + y;
  }

import add1 from "./math_functions.js";

// PROMISES
// romise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject.
const myPromise = new Promise((resolve, reject) => {
    if(true) {
      resolve("Promise was fulfilled");
    } else {
      reject("Promise was rejected");
    }
  });

/*
Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. 
When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. 
This can be achieved by using the then method. The then method is executed immediately after your promise is fulfilled with resolve. Here’s an example:
*/

myPromise.then(result => { // result comes from the argument given to the resolve method.
  
});

/*
catch is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. Here’s the syntax:
*/

myPromise.catch(error => { // error is the argument passed in to the reject method.
  
});

// REGULAR EXPRESSIONS
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);  // test method takes a regex as input and returns true or false wether the expression is found

'string'.match(/regex/);  // Returns the matched regex
/regex/.test('string');

/*
FLAGS
/ignorecase/i     Ignores case sensitivity
/Repeat/g         Retrieves all occurences of a pattern and match returns an array
*/

/*
WILDCARDS
/hu./             Will match any character. Example huh, hug, hut

CHARACTER SETS
b[aiu]g/          Will match any of the letters inside brackets
/[^aeiou]/gi      ^ Matches all characters that are not after ^
/a+/g             + Matches the repeating consecutive pattern
/go*/             /*Matches characters that occur zero or more times. Example goooooooooo in gooooooooal or g in gut feeling

/^Ricky/          Outside of a character set, the ^ operator is used to match patterns at the beginning of a string
/story$/          Matches the pattern at the end of the string

Lazy operator
/t[a-z]*i/        Will match titani in the word titanic. Returns the larges possible string
/t[a-z]*?i/       Will macth just ti in the word titanic. Returns the smallest possible string
*/