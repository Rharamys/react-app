import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import ChangeCounter from '../components/ChangeCounter'

// import { CounterContext } from '../context/CounterContext'

// hooks
import { useFetch } from '../hooks/useFetch'
import { useCounterCotext } from '../hooks/useCounterCotext'

import "./Home.css"
import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {

    // use like this,
    // const {counter} = useContext(CounterContext)

    // OR refactoring using hooks
    const {counter} = useCounterCotext()

    // complex context
    const { color , dispatch } = useTitleColorContext()

    // change complex context
    const setTitleColor = (color) => {
        dispatch({type: color})
    }

    const url = "http://localhost:3000/products"

    const {data: items, loading, error} = useFetch(url)

    return (
        <div>
            <h1 style={{color: color}}>Products</h1>
            <h2>Counter value: {counter}</h2>
            <ChangeCounter/>
            {/* Change complex context */}
            <button onClick={()=>setTitleColor("RED")}>RED</button>
            <button onClick={()=>setTitleColor("BLUE")}>BLUE</button>
            {error && <p>{error}</p>}
            <ul className="products">
                {items && items.map((item)=> (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price} USD</p>
                        {/* Dynamic route */}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Home