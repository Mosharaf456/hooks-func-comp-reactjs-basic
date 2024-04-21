import { useEffect } from 'react'

// Custom Hook - convention is to start with 'use' keyword. Also linters rely on this convention 
//to determine rules of hooks applied to the function or not.
// Purpose of custom hooks : resuing logic instead of duplicating the logic in multiple components.
function useDocumentTitle(count) {
    useEffect(() => {
        console.log(`useDocumentTitle - updating document title ${count} times`)
        document.title = `Count ${count}`
    }, [count]);
}

export default useDocumentTitle