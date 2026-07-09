import { useState } from "react";

export default function Hide() {
    const [isVisible, setIsVisible] = useState(false);
    
    return  (
        <>
            {isVisible && <p>Hello world</p>}
            <button
                onClick={() => setIsVisible((prevIsVisible) => !prevIsVisible)}
            >
                {isVisible ? 'Приховати текст' : 'Показати текст'}
            </button>

        </>
    )
    
}