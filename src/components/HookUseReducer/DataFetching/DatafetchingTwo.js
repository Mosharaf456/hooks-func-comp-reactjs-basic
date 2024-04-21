import React, { useEffect, useReducer } from 'react'
import axios from 'axios';

/*
useState Vs useReducer
1. When to use useState
- Type of state - Number, String, Boolean
- Number of state transitions - One or Two
- Related state transitions - Unrelated state transitions
- Business logic - No business logic
- Local vs Global - Local

    - When dealing with simple state or single state value.
    - When state transition does not depend on the previous state.
    - When the logic is simple and does not involve multiple sub-values.
2. When to use useReducer
- Type of state - Object or Array
- Number of state transitions - Too many
- Related state transitions - Related state transitions
- Business logic - Complex business logic
- Local vs Global - Global state better managed with useReducer

    - When state logic is complex and involves multiple sub-values.
    - When next state depends on the previous state.
    - When you have similar states that can be grouped together.
    - When the logic is complex and involves multiple sub-values.
    - When you have multiple actions that leads to state transitions.
*/
const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'Something went wrong!',
                post: {}
            }
        default:
            return state;
    }
}

function DatafetchingTwo() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_ERROR'});
        })
    }, [])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DatafetchingTwo