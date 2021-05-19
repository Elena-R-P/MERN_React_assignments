import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {
        
    return (
        <div>
            <h1>All products</h1>
            {props.product.map((product, idx)=>{
                return <p key={idx}>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                    <Link to={`/products/edit/${product._id}`}><button>Edit</button></Link>
                </p>
                
            })}
        </div>
        
    )
}