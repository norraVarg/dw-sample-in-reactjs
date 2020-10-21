import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './ProductCard.css'
import ProductDetails from '../ProductDetails/ProductDetails';

const ProductCard = (props) => {
    const [productDetails, setProductDetails] = useState({});
    const [assets, setAssets] = useState({});
    const [detailsVisibility, setDetailsVisibility] = useState(false);

    const extractProductDetails = (data) => {
        const productDetails = {};
        data.forEach(({name: n, value: v}) => productDetails[n] = v);

        return productDetails;
    }

    const showProductDetails = () => {
        setDetailsVisibility(true);
    }

    const hideProductDetails = (e) => {
        e.stopPropagation();
        setDetailsVisibility(false);
    }

    useEffect(() => {
        axios.get(`https://dev-api.danielwellington.com/frontend/products/${props.id}`)
            .then(product => {
                const productDetails = extractProductDetails(product.data.data.elements);
                setProductDetails(productDetails);

                axios.get(`https://dev-api.danielwellington.com/frontend/assets/${productDetails.main_image.id}`)
                    .then(assets => {
                        setAssets(assets);
                    })
                    .catch(error => console.log(error));               
            })
            .catch(error => console.log(error));
    }, [props.id]);

    return (
        <div className='product-card' onClick={showProductDetails} style={{backgroundImage: `url(${assets.data?.data.uri})`}}>
            {detailsVisibility && <ProductDetails hideProductDetails={hideProductDetails} productDetails={{...productDetails, uri: assets.data?.data.uri}} />}
            <span className='product-name'>{productDetails.name}</span>
            <span className='product-price'>${productDetails.price?.value}</span>
        </div>
    );
}

export default ProductCard;