import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event logged');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition);
    }, []) // empty array means it will run only once after the initial render. sure enough we have mimic the componentDidMount lifecycle method.

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

/*
Keep in mind that from this example 
we can mimic the componentDidMount lifecycle method with useEffect by simply passing in an empty array as second parameter to the useEffect.

***Empty array , we are basically telling React that our effect does not depend on any props or state. So there is just no reason to re-run this effect on re-renders.
So it will run only once after the initial render.And forget about it. We mimic the componentDidMount lifecycle method.
*/
export default HookMouse