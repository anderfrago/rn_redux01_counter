import * as types from "./actionTypes";

export function incrementCounter() {
  return {
     type: types.INCREMENT,
     value: 1 
    };
}

export function decrementCounter() {
  return { 
    type: types.DECREMENT, 
    value: 1 
  };
}
