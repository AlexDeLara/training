// ##################################################################### ELEMENT QUERYING #####################################################################

const container = document.querySelector('#container');
// selects the #container div (don't worry about the syntax, we'll get there)

console.dir(container.firstElementChild);                      
// selects the first child of #container => .display

const controls = document.querySelector('.controls');   
// selects the .controls div

console.dir(controls.previousElementSibling);                  
// selects the prior sibling => .display

element.querySelector("selector") //returns a reference to the first match of selector
element.querySelectorAll("selectors") //returns a “nodelist” containing references to all of the matches of the selectors

nodearr = Array.from(nodelist) // These transform a nodelist into an array
nodearr = [...nodelist] // A nodelist lacks some of the arrays functionalities

// ########################################################### ELEMENT CREATION & APPEND / REMOVE ##############################################################

document.createElement("tagName", [options]) // creates a new element of tag type tagName
// This function does NOT put your new element into the DOM - it simply creates it in memory.

parentNode.appendChild("childNode") // appends childNode as the last child of parentNode
parentNode.insertBefore("newNode", "referenceNode") // inserts newNode into parentNode before referenceNode

parentNode.removeChild("child") // removes child from parentNode on the DOM and returns a reference to child

// ################################################################### ELEMENT ALTERING #######################################################################
const div = document.createElement('div');                     

div.style.color = 'blue';                                      
// adds the indicated style rule

div.style.cssText = 'color: blue; background: white;';          
// adds several style rules

div.setAttribute('style', 'color: blue; background: white;');    
// adds several style rules
// CSS Styling guide in JS http://domenlightenment.com/#6.2

// kebab-case vs camelCase
div.style.background-color // doesn't work - attempts to subtract color from div.style.background
div.style.backgroundColor // accesses the div's background-color style
div.style['background-color'] // also works
div.style.cssText = "background-color: white;" // ok in a string

// ##################################################################### ATTRIBUTE EDITING #####################################################################
div.setAttribute('id', 'theDiv');                              
// if id exists, update it to 'theDiv', else create an id
// with value "theDiv"

div.getAttribute('id');                                        
// returns value of specified attribute, in this case
// "theDiv"

div.removeAttribute('id');                                     
// removes specified attribute
// HTML Attributes list https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes

// ###################################################################### CLASS EDITING ########################################################################
div.classList.add('new');                                      
// adds class "new" to your new div

div.classList.remove('new');                                   
// removes "new" class from div

div.classList.toggle('active');                                
// if div doesn't have class "active" then add it, or if
// it does, then remove it

// ###################################################################### ADDING TEXT ##########################################################################

div.textContent = 'Hello World!'                               
// creates a text node containing "Hello World!" and
// inserts it in div

div.innerHTML = '<span>Hello World!</span>'; // SHOULD BE USED WITH CAUTION, CAN CAUSE SECURITY RISKS            
// renders the HTML inside div

/*
Keep in mind that the JavaScript does not alter your HTML, 
but the DOM - your HTML file will look the same, 
but the JavaScript changes what the browser renders.
*/