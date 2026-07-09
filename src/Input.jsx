import { useState } from "react";

export default function Input() {
    const [input, setInput] = useState('')

    return(
        <>
        <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
        />
        <h1>{input || "Input something..."} </h1>

        <button onClick={() => setInput("")}>
            clear input
        </button>
        
        </>        
    )
}
