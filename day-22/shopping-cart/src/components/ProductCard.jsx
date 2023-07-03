import React from "react";
import { useCart } from "../context/cartContext";
function ProductCard({ title, price, imageUrl, id }) {
    const { setCartItems } = useCart();
    function addToCart() {
        const newCartItem = {
            id,
            title,
            price,
            imageUrl,
        };
        setCartItems((prevCartItems) => [...prevCartItems, newCartItem]);
    }
    return (
        <div>
            <img src={imageUrl} alt="" />
            <h2>{title}</h2>
            <h3>Price : {price}</h3>
            <button onClick={addToCart}>Add to cart</button>
        </div>
    );
}

export default ProductCard;
