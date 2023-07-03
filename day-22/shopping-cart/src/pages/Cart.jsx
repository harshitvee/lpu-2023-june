import React from "react";
import { useCart } from "../context/cartContext";
function Cart() {
    const { something } = useCart();
    return <div>{something}</div>;
}

export default Cart;
