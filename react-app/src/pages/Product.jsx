import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {

    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id

    const { data: product, loading, error} = useFetch(url)

    return (
        <>
            <div>Product ID: {id}</div>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && (
                <div>
                    <h1>{product.name}</h1>
                    <p>{product.price} USD</p>
                    {/* NESTED Routes */}
                    <Link to={`/products/${product.id}/info`}>Mais Informações</Link>
                </div>
            )}
        </>
    )
}

export default Product