import { useState } from "react"

const ManageData = () => {
    let someData = 0

    const [number, setNumber] = useState(15);

    return (
        <div>
            <p>someData value: {someData}</p>
            <button onClick={()=>{someData = 15}}>Change someData variable to 15</button>

            <p>number value: {number}</p>
            <button onClick={()=>{setNumber(30)}}>Change number variable to 30</button>
        </div>
    )
}

export default ManageData