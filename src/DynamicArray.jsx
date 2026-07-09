import { useState } from "react";

export default function Dynamic() {
    const [numbers, setNumbers] = useState([])

    return(
        <>
            <button 
                onClick={() => setNumbers((prev) => [...prev, (Math.floor(Math.random()* 101))])}
            >Random number</button>
            <ul>
                <h3>Unordered list</h3>
                <li>one</li>
                <li>two</li>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>        
        </>
    )
}