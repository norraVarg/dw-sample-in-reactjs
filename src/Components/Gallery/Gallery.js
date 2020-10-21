import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './Gallery.css'
import ProductCard from '../ProductCard/ProductCard';

const Gallery = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://dev-api.danielwellington.com/frontend/products')
            .then(response => {
                setProducts(response.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div className='product-amount'>{products.length} Products</div>
            {products.length > 0 && <div className='gallery'>{products.map(product => <ProductCard key={product.id} id = {product.id} />)}</div>}
        </>
    );
}

export default Gallery;