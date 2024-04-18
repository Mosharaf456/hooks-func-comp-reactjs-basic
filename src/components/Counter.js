import React, {useState} from 'react'
// hooks are just function we simply call them into our functional component

/* Basic part of Hooks:
useState is a Hook function that lets you add React state to the functional components.
Steps of useState Hook: 
1. A created component will use. 
2. state property initialized with 0 default value but default value is never used to re-render the component.
3. A method to update the state property and that will cost the component to re-render.
*/

function Counter() {
  /* useState accept the initial value of the state property 
    and returns the current value of the state property and a method to update the state property.
    
    //It is array destructuring const [count , setCount] which is feature of ES6.
  */
  const [count , setCount] = useState(0);
  
  return (
    <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <h1>Counter {count}</h1>
        <button>-</button>
    </div>
  )
}

/*
Note:
Only call Hooks at the top level. **
Don’t call Hooks inside loops, conditions, or nested functions.**

**Make sure :
Only call Hooks from React function components.**
Don’t call Hooks from regular JavaScript functions.**
*/

export default Counter