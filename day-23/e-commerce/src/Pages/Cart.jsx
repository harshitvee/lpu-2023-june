import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../config/supabase";
import { useAuth } from "../context/authContext";
function Cart() {
    const [loading, setLoading] = useState(true);
    const { session } = useAuth();
    async function getProduct(id) {
        let { data, error } = await supabase
            .from("products")
            .select()
            .eq("id", id)
            .single();
        return data;
    }
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
                data.forEach((cartItem) => {
                    // console.log(cartItem.product_id);
                    getProduct(cartItem.product_id).then((data) =>
                        console.log(data)
                    );
                });
            }

            setLoading(false);
        }

        if (session) getCart();
    }, [session]);
    return <h1>Cart</h1>;
}

export default Cart;
