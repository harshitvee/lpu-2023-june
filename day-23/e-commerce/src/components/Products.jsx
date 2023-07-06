import React from "react";
import ProductCard from "./ProductCard";
function Products({ products }) {
    return (
        <div className="container mx-auto grid grid-cols-4 justify-between gap-6">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.product_name}
                    brand={product.brand}
                    price={product.price}
                    category={product.category}
                />
            ))}
        </div>
    );
}

export default Products;
