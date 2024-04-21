import React, {useReducer} from 'react'

const initialState = 0;
// here state is the current state value as integer value not an object and action is the action that we want to perform on the state.
// action is a string value that we are passing to dispatch function.
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state;
    }
}
function Counter1() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count :  {count}</div>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}>Decrement</button>
            <button onClick = {() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default Counter1