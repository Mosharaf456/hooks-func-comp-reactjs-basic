import React from 'react'
import useCounter from '../CustomHook/useCounter'

function CounterOneCustomHook() {
    const [count, increment, decrement, reset] = useCounter(0, 1);
    return (
        <div>
            <h2>Count= {count}</h2>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    )
}

export default CounterOneCustomHook