import React from 'react'

/*
 useEffect calls after every single render.
 In some cases applying the effect after every render might create performance issues.
 So we need a way to conditionally run the effect from a functional component .
 

 */
function CounterEffectTwo() {
  return (
    <div>CounterEffectTwo</div>
  )
}

export default CounterEffectTwo