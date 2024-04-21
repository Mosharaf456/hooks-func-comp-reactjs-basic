import React, {useReducer} from 'react'
/*
multiple state variables that have same state transitions , it is good to use multiple  useReducers making use same reducers
functions which optimized
useReducer - local state management
Share state between multiple components - Global state management - by combining Context API + useReducer
*/
const initialState = 0;
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
function CounterThree() {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <div>
            <div>Count :  {count}</div>
            <button onClick = {() => dispatch('increment')}>Increment</button>
            <button onClick = {() => dispatch('decrement')}>Decrement</button>
            <button onClick = {() => dispatch('reset')}>Reset</button>
            <div>
                <div>Count :  {countTwo}</div>
                <button onClick = {() => dispatchTwo('increment')}>Increment</button>
                <button onClick = {() => dispatchTwo('decrement')}>Decrement</button>
                <button onClick = {() => dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    )
}

export default CounterThree