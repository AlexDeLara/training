/* WIth redux the entire App states are helnd in a Redux store instead of each component */
/* To create a Redux store */
const store = Redux.createStore(
    (state = {login: false}) => state
);

/* To retrieve a state */
const currentState = store.getState();

/* Redux actions deliver information about events that happen in the App and send them to the Redux Store so that states are updated */
/* Actions are simply objets with a type property declared */
const action = {
    type: "LOGIN"
};

/* After actions are declared, an action creator (function) must be declared to pass the action to Redux */
const loginAction = () => {
    return {
      type: 'LOGIN'
    }
};

/* Action creators are then dispatched to the store with the dispatch() method */
store.dispatch(loginAction());

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*
Reducers in Redux are responsible for the state modifications that take place in response to actions. 
A reducer takes state and action as arguments, and it always returns a new state.
NOTE: REDUCERS MUST NOT MUTATE THE ORIGINAL STATE, BUT RETURN A COPY INSTEAD
*/

const defaultState = {
    login: false
};

const reducer = (state = defaultState, action) => {
    // Change code below this line
    const stateCopy = {...state};
    if(action.type === 'LOGIN') {
        stateCopy.login = true;
    }

    return stateCopy;
    // Change code above this line
};

const store1 = Redux.createStore(reducer);

const loginAction1 = () => {
    return {
        type: 'LOGIN'
    }
};

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
/* The store.subscribe method allows for executing a function each time the store is updated */
// Global count variable:
let count = 0;

store.subscribe(() => count++);  /* Increments the count every store.dispatch() */

// Multiple reducers must be created, an all of them must be attached to a rootReducer
// Now, the key notes will contain all of the state associated with our notes and handled by our notesReducer

const rootReducer = Redux.combineReducers({
    auth: authenticationReducer,
    notes: notesReducer
});
// The rootReducer is passed as an argument to create the store
const store2 = Redux.createStore(rootReducer);

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Actions can contain other data additional to the type

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE
    , text: note
  }
  // Change code above this line
};

const store3 = Redux.createStore(notesReducer);

console.log(store3.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store3.getState());

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// To handle asynchronous actions, simply return a function with the dispatch parameter as an argument
// Redux.applyMiddleware(ReduxThunk.default) must be passed to the createStore method

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // Dispatch request action here
    dispatch(requestingData());                 // Action dispatch before asynchronous call (could be an action to display a loading icon)
    setTimeout(function() {                     // Asynchronous request
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here
      dispatch(receivedData(data));              // Action dispatch with the payload data after the asynchronous call
    }, 2500);
  }
};

const defaultState1 = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState1, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store4 = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)             // Allows handling asynchronous calls
);

/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------- */
// Using const newObject = Object.assign({}, obj1, obj2); to return a new object. Matching properties from obj1 and obj2 are overwritten from obj2 into obj1
const defaultState2 = {
    user: 'CamperBot',
    status: 'offline',
    friends: '732,982',
    community: 'freeCodeCamp'
  };
  
  const immutableReducer = (state = defaultState2, action) => {
    switch(action.type) {
      case 'ONLINE':
        // Don't mutate state here or the tests will fail
        return Object.assign({}, state, {status: 'online'});
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: 'ONLINE'
    }
  };
  
  const store5 = Redux.createStore(immutableReducer);