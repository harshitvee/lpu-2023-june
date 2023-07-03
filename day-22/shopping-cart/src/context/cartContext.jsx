import { createContext } from "react";
import { useContext } from "react";
const CartContext = createContext();

function CartProvider({ children }) {
    return (
        <CartContext.Provider value={{ something: "somevalue" }}>
            {children}
        </CartContext.Provider>
    );
}

function useCart() {
    return useContext(CartContext);
}

export { CartContext, CartProvider, useCart };
