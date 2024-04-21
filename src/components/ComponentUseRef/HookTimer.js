import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    }, []);

    return (
        <div>
            HookTimer : {timer} 
            {/* interval is not defined this where useRef used */}
            {/* it also hold referenceof DOM node using the ref attribute,  Value will parse through the re-renders and while also not causing  any additional re-renders - we will use useRef hook */}
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    )
}

export default HookTimer