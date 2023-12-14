import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch';

const Product = () => {

    const { id } = useParams();

    const url = "http://localhost:3000/products/" + id

    const { data: product, loading, error} = useFetch(url)

    return (
        <div>Product ID: {id}</div>
    )
}

export default Product