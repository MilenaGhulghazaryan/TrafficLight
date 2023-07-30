import React, { useState } from "react";
import './trafficԼight.css'
const UseState = ({ color, lit, setLit }) => {
    // const [counter, setCounter] = useState(0)
    return (
        // <div>
        //     <button onClick={() => {
        //         setCounter(count => count - 1)
        //     }}>-</button>
        //     <button onClick={() => {
        //         setCounter(count => count + 1)
        //     }}>+</button>
        //      <p>{counter}</p>
        // </div>

        <div className="light"
            style={{ backgroundColor: color === lit ? color : 'gray' }}
            onClick={() => setLit(color)}
        ></div>
    )
}
export default UseState