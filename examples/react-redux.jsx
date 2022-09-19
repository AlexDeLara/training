{/*
React Redux provides a small API with two key features: Provider and connect. 
The Provider is a wrapper component from React Redux that wraps your React app. 
This wrapper then allows you to access the Redux store and dispatch functions throughout your component tree. 
Provider takes two props, the Redux store and the child components of your app. 
Defining the Provider for an App component might look like this:
*/}

<Provider store={store}>
  <App/>
</Provider>


{/* *********************************************************************************************************************************** */}
{/* Complete example shows react and redux in the same code */}
// Redux:
const ADD = 'ADD';

const addMessage0 = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
  render() {
    return (
      <Provider store={store}>
        <DisplayMessages/>
      </Provider>
    )
  }
  // Change code above this line
};

{/*
The Provider component allows you to provide state and dispatch to your React components, but you must specify exactly what state and actions you want. 
This way, you make sure that each component only has access to the state it needs. 
You accomplish this by creating two functions: mapStateToProps() and mapDispatchToProps().
*/}

/* Behind the scenes uses store.subscribe() */
const mapStateToProps = (state) => {
    return {messages: state};
}

{/*
The mapDispatchToProps() function is used to provide specific action creators to your React components so they can dispatch actions against the Redux store. 
It's similar in structure to the mapStateToProps() function you wrote in the last challenge. 
It returns an object that maps dispatch actions to property names, which become component props. 
However, instead of returning a piece of state, each property returns a function that calls dispatch with an action creator and any relevant action data. 
*/}

const addMessage = (message) => {
    return {
        type: 'ADD',
        message: message
    }
};

// Change code below this line
const mapDispatchToProps = (dispatch) => {
    return {
        submitNewMessage: (
            (newMessage) => dispatch(addMessage(newMessage))
        )
    }
}

{/*
Now that you've written both the mapStateToProps() and the mapDispatchToProps() functions, you can use them to map state and dispatch to the props of one of your React components. 
The connect method from React Redux can handle this task. This method takes two optional arguments, mapStateToProps() and mapDispatchToProps().
They are optional because you may have a component that only needs access to state but doesn't need to dispatch any actions, or vice versa.
To use this method, pass in the functions as arguments, and immediately call the result with your component. 
This syntax is a little unusual and looks like:
*/}

connect(mapStateToProps, mapDispatchToProps)(MyComponent)

{/*Note: If you want to omit one of the arguments to the connect method, you pass null in its place.*/}

const addMessage1 = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  const mapStateToProps1 = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps1 = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage1(message));
      }
    }
  };
  
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // Change code below this line
  
  const ConnectedComponent = connect(mapStateToProps1, mapDispatchToProps1)(Presentational)

{/*
In the last lesson, the component you connected to Redux was named Presentational, and this wasn't arbitrary. 
This term generally refers to React components that are not directly connected to Redux. 
They are simply responsible for the presentation of UI and do this as a function of the props they receive. 
By contrast, container components are connected to Redux. 
These are typically responsible for dispatching actions to the store and often pass store state to child components as props.
*/}