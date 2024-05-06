import React, { useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

/*
Only the Count component is re-rendered when the salary is incremented.
Others are not re-rendered by using React.memo.
React .memo is a higher order component. It’s similar to React .PureComponent but for function components instead of classes.
It has nothing to do with hooks. It’s a way to optimize the performance of the function components.
So your component will only re-render if the props or state have changed.

What is useCallback hook?
useCallback is a hook that will return a memoized version of the callback function 
that only changes if one of the dependencies has changed.

Why? It is useful when passing callbacks 
to optimized child components that rely on reference equality to prevent unnecessary renders.
reference - CHECK the functions are equal or not.

All requirement is fulfilled by React.memo.
Then use useCallBack hook further.
***How to use useCallback hook?
useCallback hook takes two arguments:
1. callback function
2. dependencies array
useCallback will return a memoized version of the callback function.
*/ 

function ParentComponent() {
    const [age, setAge] = React.useState(25);
    const [salary, setSalary] = React.useState(97000);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age]);

    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000)
    }, [salary])

    return (
        <div>
            {/* here Title, Count, Button all are child component , not jsx */}
            <Title />
            <Count text='Age' count={age}/>
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text='Salary' count={salary}/>
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent