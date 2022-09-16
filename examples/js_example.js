// Variables
var x = 3;                                      // variable declaration can be overwritten without an error with var
let user = 'John'
  , age = 25
  , message = 'Hello';                          // variable can only be declared once with let. The variable exists only in the block of context it was defined
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

for (let user in users) {
  console.log(user);
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

// Removes any number of consecutive elements anywhere on the array
const newarr = outArray.splice(startelement, elementstoremove, ...elementstoadd);

// Find the position of an element on an array
// If the element does not exist, -1 is returned
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];
fruits.indexOf('dates');

// Copy or slice from the array
// First parameter is slice start and second is slice end not including the element in the end position
let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];
let todaysWeather = weatherConditions.slice(1, 3);

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
"top" in myObj;

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
  }arguments
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
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1'); //Replaces regex with new text. The $ operators access the capture groups

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
/\w/              Matches /[A-Za-z0-9_]/      Alphanumeric
/\W/              Matches /[^A-Za-z0-9_]/     Not alphanumeric
/\d/              Matches /[0-9]/             Digits
/\D/              Matches /[^0-9]/            No digits
/\s/              Matches white spaces, carriage return, tab, form feed, and new line characters [\r\t\f\n\v]
/\S/              Matches everything but white spaces
/{2}/             Exactly two or more occurences
/{2,5}/           Two to five occurences
/{2,}/            Two or more occurences
/{1,}/            One or more occurences. Equivalent to +
/{0,}/            Zero or more occurences. Equivalent to *
/?/               Allows for the preceding element to ? to exist or not

LOOKAHEADS
/x(?=y)/          Matches x is y is found ahead
/x(?!y)/          Matches x is y is NOT found ahead

Are useful to CHECK one or more conditions*/

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);

/*
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

CAPTURA GROUPS
/(\w+) \1 \1/     /(\w+)/ Captures and temporarily stores the captured regex. Them repeats in the \1 slotes (the number of the capture group)

*/


// Remove falsy values from arr
var myFilterArray = myArray.filter(Boolean);

/*
CONSTRUCTORS

Constructors are functions that create new objects. They define properties and behaviors that will belong to the new object. Think of them as a blueprint for the creation of new objects.

Constructors are defined with a capitalized name to distinguish them from other functions that are not constructors.
*/

function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

// To create a new instance of an object

let bird = new Bird();

// Check if an object is an instance of a CONSTRUCTOR
bird instanceof Bird;

// Properties in the prototype are shared among ALL instances of Bird.
Bird.prototype.numLegs = 2;

// To add more than one prototype property at a time
Bird.prototype = {
  constructor: Bird, // Define it to avoid it being reset
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// There is one crucial side effect of manually setting the prototype to a new object. It erases the constructor property! 

function Bird(name) {
  this.name = name;  //own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");

// To see the constructor an object was created with
duck.constructor  // Can be overwrittem
duck.instanceOf   // Can't be oberwritten

// Protptype chains
Dog.prototype.isPrototypeOf(beagle);  // yields trues
Object.prototype.isPrototypeOf(Dog.prototype);

// TO prevent problems with inheritance
let animal = Object.create(Animal.prototype);
// instead of
let animal = new Animal();

// Inheritance
function Dog() { }
Dog.prototype = Object.create(Animal.prototype); // Inherits all the properties from Animal
let beagle = new Dog();
Dog.prototype.constructor = Dog;
beagle.constructor

Dog.prototype.fly = function() { // Add new properties to classes that inherited from a superclass
  console.log("I'm flying!");
};

// To override an inherited method simply use the same name

/*
If you have an instance let duck = new Bird(); and you call duck.eat(), this is how JavaScript looks for the method on the prototype chain of duck:

duck => Is eat() defined here? No.
Bird => Is eat() defined here? => Yes. Execute it and stop searching.
Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
Object => JavaScript stopped searching before reaching this level.
*/

// Mixins are used for objects that seem to share a method, but in reality no. For example, a bird and a plane both fly

let flyMixin = function(obj) { //The flyMixin takes any object and gives it the fly method.
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

flyMixin(bird);
flyMixin(plane);


// Making properties private
function Bird() {
  let hatchedEgg = 10; // hatchedEgg can only be accessed by getHatchedEggCount

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();

// Anonymous function
// Immediatly Invoked Function Expression IIFE
(function () {
  console.log("Chirp, chirp!");
})();

// Map method
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

/*
When the callback is used, it is passed three arguments. 
The first argument is the current element being processed. 
The second is the index of that element
The third is the array upon which the map method was called.
*/

const names = users.map(user => user.name); // No mutation
console.log(names);

var ratings = watchList.map(function(movie) {
  return {
    title: movie["Title"],
    rating: movie["imdbRating"]
  }
});

// Filter method
/*
The callback function accepts three arguments. 
The first argument is the current element being processed. 
The second is the index of that element and
The third is the array upon which the filter method was called.
*/

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); // No mutation

// Concat method
arr1.concat(arr2) //No mutation

// Reduce
/*
The callback function accepts four arguments
The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration
The second is the current element being processed
The third is the index of that element
The fourth is the array upon which reduce is called
*/

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);

const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);

// Sort method
// Mutates
//The sort method sorts the elements of an array according to the callback function.
//For example:

function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
//This would return the value [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
//This would return the value ['z', 's', 'l', 'h', 'b']

// Split
// Strings are immutable
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);

// Regex for all type of punctuation /[.,\/#!$%\^&\*;:{}=\-_`~()]/g

// Join
const arr = ["Hello", "World"];
const str = arr.join(" ");

// Every method
// The every method works with arrays to check if every element passes a particular test. 
// It returns a Boolean value - true if all values meet the criteria, false if not.

const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});

// Some method
// The some method works with arrays to check if any element passes a particular test. 
// It returns a Boolean value - true if any of the values meet the criteria, false if not.
const numbers = [10, 50, 8, 220, 110, 11];

numbers.some(function(currentValue) {
  return currentValue < 10;
});

// Currying
//The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1.

//In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

//Here's an example:

function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2);

/*
This is useful in your program if you can't supply all the arguments to a function at one time. 
You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. 
Here's an example using the curried function in the example above
*/
const funcForY = curried(1);
console.log(funcForY(2)); // 3

// Partialling
// Similarly, partial application can be described as applying a few arguments to a function at a time and returning another function that is applied to more arguments. Here's an example:

function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13

const helloWorld = function() {
  return ''
}

module.exports = helloWorld // Exports a function to be taken from another file

// Import code from a script into a variable
const helloWorld = require('./helloWorld');