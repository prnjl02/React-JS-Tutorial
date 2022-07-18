import React, { useState } from 'react';
import './Counter.scss';

export default function Counter() {
    const [count, setCount] = useState(0);
    let increaseCounter = () => {
        setCount(count + 1);
    }
    let decrementCounter = () => {
        setCount(count - 1);
    }
    let resetCounter = () => {
        setCount(0);
    }
    return (
        <div className='counter container my-5 py-5'>
            <div className='name'>
                The current counter value is {count}
            </div>
            <button className="btn btn-primary" onClick={increaseCounter}>Increase Count</button>
            <button className="btn btn-danger" onClick={decrementCounter}>Decremenet Count</button>
            <button className="btn btn-success" onClick={resetCounter}>Reset Count</button>
        </div>
    )
}
