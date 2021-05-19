import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res => setProduct(res.data.results))
    }, [])

    const deleteProductClickHandler = () =>{
        axios.delete(`http://localhost:8000/api/products/delete/${props.id}`)
            .then(res=>{
                console.log(res)
                navigate("/")
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <p>ID: {props.id}</p>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/products/edit/${props.id}`}><button>Edit</button></Link>
            <button onClick={deleteProductClickHandler}>Delete</button>
        </div>
    )
}