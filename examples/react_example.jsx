const JSX = (<div>
    <p>Paragraph One</p>
    <p>Paragraph Two</p>
    <p>Paragraph Three</p>
</div>); {/* Assign a div to a constant */}

{/* To render elements into the DOM */}
ReactDOM.render(componentToRender, targetNode)
ReactDOM.render(JSX, document.getElementById("challenge-node"));

{/* To define classes JSX uses the reserved word className instear of class */}
{/* Attributes and events become camelCase. Example: onClick, onChange,  */}

const JSX1 = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
);

{/* Components */}
{/* Stateless components receive data and render it, but does not track changes of it */}

{/* Create a component with a JS function */}
const DemoComponent = function() { {/* Must start with a capital letter */}
    return (
      <div className='customClass' /> /* Must return null o JSX */
    );
};

{/* Create a component with a class extension */}
class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
}

{/* *********************************************************************************************************************************** */}

{/*
To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX. 
For example, in the render method you could write:

return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
)
*/}

const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        { /* Change code below this line */ }
        <ChildComponent/>
        { /* Change code above this line */ }
      </div>
    );
  }
};

{/* *********************************************************************************************************************************** */}
{/* RENDERING */}

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
        <Fruits/>
        <Vegetables/>
        {/* Change code above this line */}
      </div>
    );
  }
};

// Change code below this line
ReactDOM.render(<TypesOfFood/>, document.getElementById("challenge-node"));

{/* *********************************************************************************************************************************** */}
{/* PROPS */}

const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is: {props.date}</p>    { /* Props are accessed from the function parameters */ }
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* Change code below this line */ }
        <CurrentDate date={Date()}/>                { /* Props are passed in the HTML. To write JS in HTML use curly braces */ }
        { /* Change code above this line */ }
      </div>
    );
  }
};

{/* *********************************************************************************************************************************** */}
