
import { useState, useEffect } from "react"

export default function Counter() {

    const [count, setCount] = useState(10)

    useEffect(() => {
        console.log("I am inside useEffect")
    }, [count])

    return (
        <div className="p-5 bg-gray-200 text-center">
            <h1 className="text-3xl">Count: {count}</h1>
            <button onClick={() => setCount(count + 1)} className="btn">Increment</button>
            <button onClick={() => setCount(count - 1)} className="btn">Decrement</button>
        </div>
    )
}