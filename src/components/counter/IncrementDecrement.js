import React, {useState} from 'react'

function IncrementDecrement() {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    return (
        <div>
            Count: {count}
            <br />
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>

        </div>
    )
}

export default IncrementDecrement