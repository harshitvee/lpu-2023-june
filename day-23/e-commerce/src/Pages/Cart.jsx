import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import { useAuth } from "../context/authContext";
function Cart() {
    const [loading, setLoading] = useState(true);
    const { session } = useAuth();
    useEffect(() => {
        async function getCart() {
            setLoading(true);
            const { user } = session;

            let { data, error } = await supabase
                .from("cart")
                .select(`product_id, quantity`)
                .eq("customer_id", user.id);

            if (error) {
                console.warn(error);
            } else if (data) {
                console.log(data);
            }

            setLoading(false);
        }

        if (session) getCart();
    }, [session]);
    return <h1>Cart</h1>;
}

export default Cart;
