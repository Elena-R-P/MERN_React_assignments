import React, { useEffect, useState } from 'react';
import ProductCreate from '../components/ProductCreate';
import ProductAll from '../components/ProductAll';
import axios from 'axios';

export default () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    


    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProduct(res.data.results);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    }, [])
    
    return (
        <div>
            <ProductCreate/>
            <hr/>
            {loaded && <ProductAll product={product}/>}
        </div>
    )
}