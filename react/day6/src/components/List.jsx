import { useState } from "react"

export default function List() {
    const items = ["List item 1", "List item 2", "List Item 3", "List Item 4", "List Item 5"]

    const [selectedItemIndex, setSelectedItemIndex] = useState(-1)
    return (
        <ul>
            {items.map((item, index) => (
                <li
                    className={selectedItemIndex === index ? "bg-green-600" : "bg-white"}
                    key={index}
                    onClick={() => setSelectedItemIndex(index)}>
                    {item}
                </li>
            ))}
        </ul>
    )
}