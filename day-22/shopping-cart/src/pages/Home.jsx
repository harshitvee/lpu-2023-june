import React from "react";

import { products } from "../data/products";
import Products from "../components/Products";
function Home() {
    return (
        <div>
            <Products products={products} />
        </div>
    );
}

export default Home;
