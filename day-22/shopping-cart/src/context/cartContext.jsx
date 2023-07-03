import { createContext, useState } from "react";
import { useContext } from "react";
const CartContext = createContext();

function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    return (
        <CartContext.Provider
            value={{ cartItems: cartItems, setCartItems: setCartItems }}
        >
            {children}
        </CartContext.Provider>
    );
}

function useCart() {
    return useContext(CartContext);
}

export { CartContext, CartProvider, useCart };
