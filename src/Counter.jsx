import { useState } from "react"
import CounterButton from "./CounterButton";


export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter is: {count} </h1>
            <div className="counter">
                <CounterButton text="Plus" onClick={() => setCount((prevCount) => prevCount +1)}/>
                <CounterButton text="Minus" onClick={() => setCount((prevCount) => prevCount -1)}/>
                <CounterButton text="Reset" onClick={() => setCount(0)}/>
            </div>

        </>
    )
}