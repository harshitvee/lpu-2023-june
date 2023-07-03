import React from "react";
import { useCart } from "../context/cartContext";
function Cart() {
    const { cartItems } = useCart();

    return (
        <div>
            {cartItems.map((cartItem) => {
                return (
                    <div>
                        <h2>{cartItem.title}</h2>
                    </div>
                );
            })}
        </div>
    );
}

export default Cart;
