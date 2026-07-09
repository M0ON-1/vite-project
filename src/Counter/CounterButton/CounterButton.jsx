import clasess from "./CounterButton.module.scss"
// const CounterButton = ({text, onClick}) => {
//     return (
//         <button className="btn" onClick={onClick}>{text}</button>
//     )
// }

export default function CounterButton ({text, onClick}) {
    return (
        <>
            <button className={clasess.counterButton} onClick={onClick}>{text}</button>
        </>
    )
}

// export default CounterButton
