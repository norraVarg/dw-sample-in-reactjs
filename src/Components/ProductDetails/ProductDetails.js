import React from 'react';
import ReactDOM from 'react-dom';

import './ProductDetails.css'

const ProductDetails = (props) => {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return ReactDOM.createPortal (
        <div className='overlay' onClick={props.hideProductDetails}>
            <div className='product-details' onClick={stopPropagation}>
                <div className='header'>
                    <span>{props.productDetails.name}</span>
                    <span className='close-btn' onClick={props.hideProductDetails}>X</span>
                </div>
                <div className='content'>
                    <div className='product-image' style={{backgroundImage: `url(${props.productDetails.uri})`}}></div>
                    <div className='product-other-info'>
                        <span className='product-details-price'>$ {props.productDetails.price.value}</span>
                        <span>Color: {props.productDetails.color}</span>
                        <span>Size: {props.productDetails.size}</span>
                        <span>Stock: {props.productDetails.qty_pack}</span>
                        <span className='add-to-cart-btn'>Add to Cart</span>
                    </div>
                    <div className='product-description'><b>Description</b><br/><br/>{props.productDetails.description}</div>
                </div>
            </div>
        </div>,
        document.getElementById('portal-root')
    );
}

export default ProductDetails;