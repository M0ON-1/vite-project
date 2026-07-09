import { useState } from "react"
import CounterButton from "./CounterButton/CounterButton";
import Header from '../Header/Header'
import Footer from "../Footer/Footer";
import "../Counter/Counter.scss"


export default function Counter() {
    const [count, setCount] = useState(0);
    let titleClass = 'card__title'

    if(count > 0){
        titleClass += " card__title--positive"
    } else if(count < 0) {
        titleClass += ' card__title--negative'
    } else {
        titleClass = 'card__title'
    }
    
    return (
        <>
            <Header/>
            <div className="card">
                <h2
                    className={titleClass}
                >
                    Counter is: {count} 
                </h2>
                <CounterButton
                    text="Plus"
                    onClick={() => setCount((prevCount) => prevCount +1)}
                />
                <CounterButton
                    text="Minus"
                    onClick={() => setCount((prevCount) => prevCount -1)}
                />
            </div>
            <Footer/>
        </>
    )
}