import React from "react";

import ProductCard from "./ProductCard";
function Products({ products }) {
    return (
        <div>
            <h1>All Products</h1>
            {products.map((product) => {
                return <ProductCard key={product.id} {...product} />;
            })}
        </div>
    );
}

export default Products;
