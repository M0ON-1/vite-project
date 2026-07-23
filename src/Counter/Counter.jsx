import { useState } from "react"
import classNames from "classnames";


import CounterButton from "./CounterButton/CounterButton";
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import MyComponent from "../MyComponent";

import "../Counter/Counter.scss"


export default function Counter() {
    const [count, setCount] = useState(0);
    const titleClass = ['card__title']

    return (
        <>
            <MyComponent />
            <Header />
            <div className="card">
                <h2
                    className={classNames("card__title" , {
                      "card__title--positive": count > 0,
                      "card__title--negative": count < 0
                    })}
                >
                    Counter is: {count}
                </h2>
                <CounterButton
                    text="Plus"
                    onClick={() => setCount((prevCount) => prevCount + 1)}
                />
                <CounterButton
                    text="Minus"
                    onClick={() => setCount((prevCount) => prevCount - 1)}
                />
            </div>
            <Footer />
        </>
    )
}