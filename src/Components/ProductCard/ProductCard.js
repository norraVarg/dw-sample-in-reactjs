import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCard.css'

const ProductCard = (props) => {
    const [product, setProductInfo] = useState({});
    const [assets, setAssets] = useState({});

    const getProductInfo = (data) => {
        const productInfo = {};

        for (const {name: n, value: v} of data) {
            productInfo[n] = v;
        }

        console.log('productInfo: ', productInfo);
        return productInfo;
    }

    useEffect(() => {
        axios.get(`https://dev-api.danielwellington.com/frontend/products/${props.id}`)
            .then(product => {
                const productInfo = getProductInfo(product.data.data.elements);
                axios.get(`https://dev-api.danielwellington.com/frontend/assets/${productInfo.main_image.id}`)
                    .then(assets => {
                        setAssets(assets);
                    })
                    .catch(error => console.log(error));               
                setProductInfo({data: productInfo});
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className='product-card' style={{backgroundImage: `url(${assets.data?.data.uri})`}}>
            <span className='product-name'>{product.data?.name}</span>
            <span className='product-price'>${product.data?.price.value}</span>
        </div>
    );
}

export default ProductCard;