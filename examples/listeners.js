btn.addEventListener('click', function (e) {
    console.log(e);
  });

// *Note that function (e) is a callback from addEventListener. Further explanation of callbacks can be found https://dev.to/i3uckwheat/understanding-callbacks-2o9e

/*
The e in that function is an object that references the event itself. 
Within that object you have access to many useful properties and functions such as which mouse button or key was pressed, 
or information about the event’s target - the DOM node that was clicked.
*/

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });



// TO APPLY LISTENERS TO A LIST OF ELEMENTS
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});


// LIST OF DOM EVENTS https://www.w3schools.com/jsref/dom_obj_event.asp
