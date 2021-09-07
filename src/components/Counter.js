import React, { useState } from 'react'

const Counter = () => {
    const [count, setcount] = useState(0)
    const increaseCount = () => {
        setcount(count + 1);
    }
    const decreaseCount = () => {
        setcount(count - 1);
    }
    return (
        <>
            <p>{count}</p>
            <button onClick={increaseCount}>Increment</button>
            <button onClick={decreaseCount}>Decrement</button>
        </>
    )
}

export default Counter
