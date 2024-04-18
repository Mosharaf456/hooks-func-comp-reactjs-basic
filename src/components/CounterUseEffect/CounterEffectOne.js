import React, {useState, useEffect} from 'react'
/*
Replace componentDidMount, componentDidUpdate, componentWillUnmount with useEffect Hook.
*/
function CounterEffectOne() {
    const [count, setCount] = useState(0);  
    const [name, setName] = useState('');

    // we are basically requesting React to run our function that is passed as an argument to useEffect after every time component render. 
    // useEffect runs after every render of the component.
    // it runs both after the first render and after every update.
    // we can ofcourse customized .
    // useeffect placed inside the component by doing this we can easily access the state and props of the component without having write any additional code.

    
    useEffect(() => {
        console.log('useEffect - Updating document title')  ;
        document.title = `You clicked ${count} times`
    }, [count]) 
    // conditionally run an effect specified in the second argument of useEffect that is dependency list.
    // If the values inside the array are changed then only the effect will run.
    // If the value is not changed then the effect will not run.

    return (
      <div>
        <input type='text' value={name} onChange={e => setName(e.target.value)} />
        <button onClick={() => setCount(prevState => prevState + 1)}>Count {count} times</button>
      </div>
    )
}

export default CounterEffectOne