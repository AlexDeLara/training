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
      <p>The current date is: {props.date}</p>    { /* Props are accessed from the function parameters */ }
      {/* To access props from a CLASS component, use this.props.propName */}
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
        <CurrentDate date={Date()}/>                { /* Props are passed in the HTML. To write JS in HTML use curly braces */ }
      </div>
    );
  }
};

{/* To pass arrasy as props they should be treated as javascript */}
{/*
<ParentComponent>
  <ChildComponent colors={["green", "blue", "red"]} />
</ParentComponent>
*/}

const List = (props) => {
  return <p>{props.tasks.join(", ")}</p>
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["task1", "task2"]}/>
        <h2>Tomorrow</h2>
        <List tasks={["task1", "task2", "task3"]}/>
      </div>
    );
  }
};

{/* *********************************************************************************************************************************** */}
{/* Set default props to prevent erros */}

MyComponent.defaultProps = { location: 'San Francisco' }

{/* Check prop types to prevent erros. As of React v15.5.0 must be imported separatedly */}
import PropTypes from 'prop-types';
MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }
Items.propTypes = {quantity: PropTypes.number.isRequired}
{/* Full list of prop types: https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes */}

{/* *********************************************************************************************************************************** */}


{/* *********************************************************************************************************************************** */}
{/* STATE DEFINITION */}
{/* State is data that changes over time and must be known by the app */}

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Alex"
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.firstName}</h1>
      </div>
    );
  }
};

{/* Example update on event */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const name = this.state.name; {/* State can also be retrieved in the render statement */}
    
    {/* To update a components state */}
    this.setState({ 
      name: 'Lewis'
    });
    return
     (
      <div>
        <h1>{naame}</h1>
      </div>
    );
  }
};

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this); {/* Binds the keyword this to the method so that it is not undefined and can access props and states */}
  }
  handleClick() {
    // Change code below this line
    this.setState({name: "React Rocks!"});
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

{/* *********************************************************************************************************************************** */}
{/* React updates props and states SYNCHRONOUSLY. This means one must not rely on this.state and this.prop values. Instead, a function with state and props must be used */}

this.setState((state, props) => ({
  counter: state.counter + props.increment
}));

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState(state => ({
      visibility: state.visibility === true ? false : true
    }));
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}

{/* Another example */}
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Change code below this line
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
    // Change code above this line
  }
  // Change code below this line
  increment() {
    this.setState(state => ({
      count: state.count + 1
    }));
  }
  decrement() {
    this.setState(state => ({
      count: state.count - 1
    }));
  }
  reset() {
    this.setState({count: 0})
  }
  // Change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

{/* Another example */}
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    // Change code below this line
    this.handleChange = this.handleChange.bind(this);
    // Change code above this line
  }
  // Change code below this line
  handleChange(event) {
    this.setState({input: event.target.value});
  }
  // Change code above this line
  render() {
    return (
      <div>
        { /* Change code below this line */}
        <input value={this.state.input} onChange={this.handleChange}/>
        { /* Change code above this line */}
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};

{/* Another example */}
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();                                   {/* PREVENTS THE FORM FROM RELOADING THE PAGE AFTER SUBMITTED */}
    this.setState(state => ({submit: state.input}));
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.input} onChange={this.handleChange}/>
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}


{/* Another example */}
{/* Passing handlers as props */}
class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
        <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
        <RenderInput input={this.state.inputValue}/>
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};

{/* *********************************************************************************************************************************** */}
{/* LIFECYCLE METHODS */}
{/* 
componentWillMount()      (will be deprecated)
componentDidMount()       Triggers when component is mounted

shouldComponentUpdate()   Tells the component to update or not based on the props or state updated. Takes nextProps and nextState as parameters. 
                          Default component behaviour is to re render each time a prop or state is updated even if they havent been changed
                          Method must return a boolean to tell React wether to update or not
componentDidUpdate() 
componentWillUnmount()    Triggers when component will be unmounted
*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log("Before component mount");
  }
  render() {
    return <div />
  }
};

{/* 
The best practice with React is to place API calls or any calls to your server in the lifecycle method componentDidMount()
This method is called after a component is mounted to the DOM. Any calls to setState() here will trigger a re-rendering of your component
The componentDidMount() method is also the best place to attach any event listeners you need to add for specific functionality.
*/}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null
    };
  }
  componentDidMount() {
    setTimeout(() => {  {/* Mock API call time */}
      this.setState({
        activeUsers: 1273
      });
    }, 2500);
  }
  render() {
    return (
      <div>
        <h1>Active Users: {this.state.activeUsers}</h1>
      </div>
    );
  }
}

{/* *********************************************************************************************************************************** */}
{/* LISTENERS */}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  // Change code below this line
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);    {/* Adding listener on component mount */}
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);    {/* It is good practice to remove listeners when unmounting and destroying components */}
  }
  // Change code above this line
  handleEnter() {
    this.setState((state) => ({
      message: state.message + 'You pressed the enter key! '
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleEnter();
    }
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
};

{/* SHOULD COMPONENT UPDATE EXAMPLE */}

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
    return nextProps.value % 2 === 0 ? true : false;
  }
  componentDidUpdate() {
    console.log('Component re-rendered.');
  }
  render() {
    return <h1>{this.props.value}</h1>;
  }
}

class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
    this.addValue = this.addValue.bind(this);
  }
  addValue() {
    this.setState(state => ({
      value: state.value + 1
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.addValue}>Add</button>
        <OnlyEvens value={this.state.value} />
      </div>
    );
  }
}

{/* *********************************************************************************************************************************** */}
{/* INLINE STYLING */}
{/* style attribute is used and set to an object */}

{/*
<div style={{color: "yellow", fontSize: "16em"}}>Mellow Yellow</div>
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>          Units are assumed to be in px
*/}


{/* *********************************************************************************************************************************** */}

{/* Normal JSX can be created in the render before the return */}
const inputStyle = {
  width: 235,
  margin: 5
};

class MagicEightBall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: '',
      randomIndex: ''
    };
    this.ask = this.ask.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  ask() {
    if (this.state.userInput) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        userInput: ''
      });
    }
  }
  handleChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }
  render() {
    const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    const answer = possibleAnswers[this.state.randomIndex];
    return (
      <div>
        <input
          type='text'
          value={this.state.userInput}
          onChange={this.handleChange}
          style={inputStyle}
        />
        <br />
        <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
        <br />
        <h3>Answer:</h3>
        <p>
          {answer}
        </p>
      </div>
    );
  }
}

{/* To return different markups based on a condition use notation: condition && markup */}
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState(state => ({
      display: !state.display
    }));
  }
  render() {
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}                                                    {/* condition && markup */}
         {this.state.userAge === '' ? buttonOne : this.state.userAge < 18 ? buttonThree : buttonTwo}    {/* ternary operator can be used too */}
       </div>
    );
  }
};