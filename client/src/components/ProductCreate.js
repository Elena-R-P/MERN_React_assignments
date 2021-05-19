import React, {useState} from 'react';
import axios from 'axios';

export default () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products/create', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <div className="mb-3">
                <lable className="form-label">Title:</lable>
                <input onChange={(e)=>setTitle(e.target.value)} value={title} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <lable className="form-label">Price:</lable>
                <input onChange={(e)=>setPrice(e.target.value)} value={price} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <lable className="form-label">Description:</lable>
                <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" className="form-control" />
            </div>
            <div className="mb-3 d-flex justify-content-end">
                <input className="btn btn-info" type="submit" value="ADD"/>
            </div>
        </form>
    )

}