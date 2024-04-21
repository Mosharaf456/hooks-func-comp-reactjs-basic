import React, { useState, useMemo } from 'react'

// useMemo is a hook that will only recompute the memoized value when one of the dependencies has changed. 
// This optimization helps to avoid expensive calculations on every render.
function CounterMemoHook() {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);
    
    const incrementOne = () => {
        setCounterOne(counterOne + 1);
    }
    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1);
    }

    // when counterOne is updated, isEven function is called and it takes a lot of time to execute.
    // To avoid this, we can use useMemo hook. when counterTwo is updated, isEven function will not slow down.
    // useMemo is a hook that will only recompute the memoized or cached value when one of the dependencies has changed.
    // This optimization helps to avoid expensive calculations on every render.
    // useMemo returns a memoized value.
   
    /*
      Difference between useCallback and useMemo
      useCallBack caches the provided function instance itself.
      useMemo invokes the provided function and caches its result.
      If you need to cache a function, use useCallback.
      If you need to cache a value, use useMemo.
        useCallback returns a memoized callback.
        useMemo returns a memoized value.
    */

    const isEven = useMemo(() => {
        let i = 0;
        while(i < 2000000000) i++;
        return counterOne % 2 === 0;
    }, [counterOne]);


    return (
        <div>
            <h1>React useMemo </h1>
            <button onClick={incrementOne}>Counter One - {counterOne}</button>
            <span> {isEven ? 'Even' : 'Odd'} </span>
            <button onClick={incrementTwo}>Counter Two - {counterTwo}</button>
        </div>
    )
}

export default CounterMemoHook