import React from 'react';
import ReactDOM from 'react-dom';

function ProductDetails() {
    return ReactDOM.createPortal (
        <div className='product-details'>
            Test
        </div>,
        document.getElementById('portal-root')
    );
}

export default ProductDetails;