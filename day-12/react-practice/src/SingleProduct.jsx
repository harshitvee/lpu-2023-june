import React from "react";

function SingleProduct({ productId, productImage, productTitle }) {
    return (
        <div>
            <img src={productImage} alt={productTitle} />
            <p>{productTitle}</p>
        </div>
    );
}

export default SingleProduct;
