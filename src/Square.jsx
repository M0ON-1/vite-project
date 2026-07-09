import { useState } from "react";

export default function Square() {
    const [color, setColor] = useState('yellow')

    return (
        <>
            <div style={{backgroundColor: color, width: '100px', height: '100px'}}>

            </div>
            <button
                onClick={() => setColor('red')}
            >Red</button>
            <button
                onClick={() => setColor('blue')}
            >Blue</button>
            <button
                onClick={() => setColor('green')}
            >Green</button>
        
        </>
    )
}