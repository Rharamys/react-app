import React, {useContext} from 'react'
import {Link} from 'react-router-dom'

import { CounterContext } from '../context/CounterContext'

// hooks
import { useFetch } from '../hooks/useFetch'

import "./Home.css"

const Home = () => {

    const {counter} = useContext(CounterContext)

    const url = "http://localhost:3000/products"

    const {data: items, loading, error} = useFetch(url)

    return (
        <div>
            <h1>Products</h1>
            <h2>Counter: {counter}</h2>
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