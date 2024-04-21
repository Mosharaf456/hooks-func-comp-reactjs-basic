
/* What is Reducer function in js - buit-in Array method in js reduce() is used to reduce the array intto a single value. 
It executes the provided function for each value of the array (from left-to-right) and
the return value of the function is stored in an accumulator. 
The JS reducer function takes four arguments:
Accumulator - prevValue
Current Value
Current Index
Source Array
The reducer function's returned value is assigned to the accumulator,
whose value is remembered across each iteration throughout the array and ultimately becomes the final, a single resulting value.

Reduce did not change the original array. It returns a new array.
The reduce() method executes the provided function for each value of the array (from left-to-right).
The reduce() method does not execute the function for the array elements without values.
*/
//Note: TypeError Thrown if the array contains no elements and initialValue is not provided.

var numbers = [1, 2, 3, 4, 5];
const initialValue = 0;
var sum = numbers.reduce(function (prevValue, currentValue, currentIndex, array) {
    return prevValue + currentValue;
}, initialValue);
console.log(sum); // 15

/* 
import { useEffect, useReducer } from "react";
*** useReducer is a hook that is used for state management in React. 
** It is realted to reducer function.
** useReducer(reducer, initialState),, Accept two parameters mendatory: a reducer function and an initial state. 
** initialState - the initial state of the state object.
** reducer(cuurentState, action),, reducer a function that takes the current state and an action as arguments and returns a new state.

** useReducer returns an array that holds the current state value and a dispatch function. [state, dispatch]
** The dispatch function is used to update the state. 
** useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values or when the next state depends on the previous one.
** useReducer also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.

It is an alternative to useState. 

useState - state management
useEffect - side effect
useContext - context API 
useReducer - state management - reducers

It is used when the state logic is complex and involves multiple sub-values or when the new state is dependent on the previous state.

useReducer(reducer, initialState)
reducer(cuurentState, action) 
reducer - a function that returns the new state based on the previous state and action.
useReducer returns an array that holds the current state value and a dispatch function. [state, dispatch]
*/

























