import { useState } from "react"

const ListRender = () => {
    const [list] = useState(["Matheus", "Pedro", "Rafael"])

    const [users, setUsers] = useState([
        {id: 0, name: "Matheus", age: 31},
        {id: 1, name: "Pedro", age: 28},
        {id: 2, name: "Rafael", age: 44},
    ])

    const deleteRandom = () => {
        if (users && users.length > 0) {
            const randomNumber = Math.floor(Math.random() * 3)
            console.log('randomNumber',randomNumber)

            // You can set like this,
            setUsers((previousUsers) => {
                return previousUsers.filter((user) => randomNumber !== user.id)
            })

            // Or you can use this
            // const newUsers = users.filter((user) => randomNumber !== user.id)
            // setUsers(newUsers)
        }
    }

    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name} - {user.age}</li>
                ))}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div>
    )
}

export default ListRender