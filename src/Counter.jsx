import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter is: {count} </h1>
            <div className="counter">
                <button 
                className="btn"
                onClick={() => setCount((prevCount) => prevCount + 1)}
                >
                    Plus
                </button>
                
                <button 
                className="btn"
                disabled ={count === 0}
                onClick={() => setCount((prevCount) => prevCount -1)}
                >
                    Minus
                </button>
                
                <button
                onClick={() => setCount(0)}
                >
                    Reset
                </button>
            </div>

        </>
    )
}