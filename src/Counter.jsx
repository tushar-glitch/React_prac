import React from 'react'
import { useState } from 'react'
import './Counter.css'
const Counter = () => {
    const [counter, setCounter] = useState(0)
    function inc() {
        setCounter(counter + 1)
    }
    function dec() {
        setCounter(counter-1)
    }
    return (
        <div>
            <button onClick={inc} className="btn">+</button>
            <div className='counter'>{counter}</div>
            <button onClick={dec} className="btn">-</button>
        </div>
    )
}

export default Counter
