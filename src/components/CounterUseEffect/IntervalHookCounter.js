import React, {useEffect, useState} from 'react'

/*
 useEffect calls after every single render.
 In some cases applying the effect after every render might create performance issues.
 So we need a way to conditionally run the effect from a functional component .
 

 */
function IntervalHookCounter({someProp}) {
    const [count, setCount] = useState(0);

    const tick = () => {
        setCount(prevCount => prevCount + 1);
    }
    
    useEffect(() => {
        function doSomething() {
            console.log(someProp)
        }
        doSomething();

        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [someProp]); // useEffect dependency correction for conditional rendering of effect.

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter