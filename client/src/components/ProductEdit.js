import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const {id} = props;

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.id}`)
            .then(res=>{
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, [])

    const updateProduct = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${props.id}`, {
            title,
            price,
            description
        })
            .then(res=>{
                console.log(res)
                navigate("/")
            });
    }
    return (
        <div>
            <h1>Update Product:</h1>
            <form onSubmit={updateProduct}>
            <div className="mb-3">
                <lable className="form-label">Title:</lable>
                <input onChange={(e)=>{setTitle(e.target.value)}} value={title} name="title" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <lable className="form-label">Price:</lable>
                <input onChange={(e)=>{setPrice(e.target.value)}} value={price} name="price" type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <lable className="form-label">Description:</lable>
                <input onChange={(e)=>{setDescription(e.target.value)}} value={description} name="description" type="text" className="form-control" />
            </div>
            <div className="mb-3 d-flex justify-content-end">
                <input className="btn btn-info" type="submit" value="ADD"/>
            </div>
            </form>
        </div>

    )
}