import React, { useEffect, useRef } from 'react'

/*
useRef hook makes it possible to access DOM nodes directly within functional components.
current property of the ref object is used to access the corresponding DOM node.
*/

function ComponentUseRef() {
    const inputRef = useRef(null);
    
    useEffect(() => {
        // focus on the input element
        inputRef.current.focus();
    }, [])

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}

export default ComponentUseRef