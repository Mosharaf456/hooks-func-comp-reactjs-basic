import React, {useState} from 'react';

function HookCounterArray() {

    const [items, setItems] = useState([]);

    const addItems = () => {
        setItems([...items, {
            id:  items.length, 
            value: Math.floor(Math.random() * 10) + 1
        }]);
    }
    return (
        <div>
            <button onClick={addItems}>Add a number</button>
            <ul>
                {
                    items.map(item => (
                        <li key={item.id}>{item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}
/*
Summary of useState Hook:
The useState hook lets you add state to functional components.
In classes, the state is always an object.
With the useState hook, the state doesn’t have to be an object.
It can be a number, a string, a boolean, an object or an array.
The useState hook returns an array with 2 elements.
The first element is the current value of the state, and the second element is a state setter function.
You call the state setter function and pass the new state value.
When the state value changes, the component re-renders.

Incase new state value depends on the previous state value, we can pass a function as an argument to the setter function.
The function receives the previous state value as an argument.
The function returns the new state value.
Finally when dealing with objects or arrays, always make sure to spread your state variable and then call the setter function.
To get the expected behavior.

*/
export default HookCounterArray;