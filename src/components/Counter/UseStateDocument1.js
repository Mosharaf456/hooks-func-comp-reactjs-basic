import React from 'react'
/**
 *  The setter function from useState does not automatically merge and update objects.
 * You have to do it manually.
 * The setter function from a useState hook will cause the component to re-render.
 * The exception is when you update the state with the exact same value as the current value .
 * -- In that case, React will bail out of the re-render. Component will not re-render.
 * Same value after re-render? React will render that specific component one more time and then bails out from any sub sequent render.
 * Recat uses Object.is comparison algorithm to determine if the state has changed.
 * Abramov mentions it safety net to actually know by react to bail out of all cases untill it renders again.
 * Render phase -  Virtual DOM is updated and compare the result with Old render and new render. The result is React elements that is JS object.
 * If not not changes then React will not update the real DOM. Discrad the result. 
 * Commit phase - Real DOM is updated.
 */
function UseStateDocument1() {
    return (
        <div>UseStateDocument1</div>
    )
}

export default UseStateDocument1