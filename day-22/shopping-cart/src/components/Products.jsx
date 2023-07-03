import React from "react";

function Products({ products }) {
    return (
        <div>
            <h1>All Products</h1>
            {products.map((product) => {
                return (
                    <div>
                        <img src={product.imageUrl} alt="" />
                        <h2>{product.title}</h2>
                        <h3>Price : {product.price}</h3>
                        <button>Add to cart</button>
                    </div>
                );
            })}
        </div>
    );
}

export default Products;
