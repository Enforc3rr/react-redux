import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import allReducers from './reducers/index';
import { Provider } from 'react-redux';


const store = createStore(
  allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );





/*
//Store - A Globalised State 


//Action describes what we wanna do
const increment = () =>{
  return {
    type : 'increment'
  }
}

const decrement = () =>{
  return {
    type : 'decrement'
  }
}
//Reducer - Describes how our actions transform a state into the next state
const counter = (state = 0, action ) =>{

  switch(action.type){
    case 'increment':
      return state + 1;
    case 'decrement':
        return state - 1;
    default:
      return state;
  }
}

let store = createStore(counter);

//display 
store.subscribe(()=> console.log(store.getState()));

//Dispatch - to dispatch an action to reducer and reducer now check what to do and updates the store.
store.dispatch(increment());

*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
