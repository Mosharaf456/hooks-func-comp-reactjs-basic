import React, {useState, useEffect} from 'react'
/*
Replace componentDidMount, componentDidUpdate, componentWillUnmount with useEffect Hook.
*/
function CounterEffectOne() {
    const [count, setCount] = useState(0);  

    // we are basically requesting React to run our function that is passed as an argument to useEffect after every time component render. 
    // useEffect runs after every render of the component.
    // it runs both after the first render and after every update.
    // we can ofcourse customized .
    // useeffect placed inside the component by doing this we can easily access the state and props of the component without having write any additional code.

    useEffect(() => {
        document.title = `You clicked ${count} times`
    })

    return (
      <div>
        <button onClick={() => setCount(prevState => prevState + 1)}>Count {count} times</button>
      </div>
    )
}

export default CounterEffectOne