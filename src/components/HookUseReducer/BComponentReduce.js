import React, { useContext } from 'react'
import { CountContext } from '../../App'


function BComponentReduce() {
    const countContext = useContext(CountContext)
    return (
        <div>
            {/* <div>Count :  {countContext.countState}</div> */}
            <button onClick = {() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick = {() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick = {() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

export default BComponentReduce