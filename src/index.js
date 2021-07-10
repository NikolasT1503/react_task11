import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {store} from './MainStore';
import { combineReducers, createStore } from "redux";
import { useDispatch, useSelector } from "react-redux";

//использование store через хуки

const INC = "INC";
const DEC = "DEC";

const initState = { counter: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case INC: {return {...state, counter: state.counter+action.payload}}
    case DEC: {return {...state, counter: state.counter-action.payload}}
    default: return state
  }
}

const counterReducer = combineReducers({
  counter: reducer, 
})

const actionInc = (count) => ({type: INC, payload: count})
const actionDec = (count) => ({type: DEC, payload: count})

const selectCount = (state) => state.counter.counter

const counterStore = createStore(counterReducer);

const Counter = () => {

  const count = useSelector(selectCount);

  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
            dispatch(actionDec(1));
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
            dispatch(actionInc(1));
        }}
      >
        +
      </button>
    </>
  );
};


ReactDOM.render(
  <Provider store={counterStore}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);


/*
  <Provider store={store}>
     <App />
    <Counter />
  </Provider>,
*/
