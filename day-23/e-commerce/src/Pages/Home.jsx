import React, { useEffect } from "react";
import { supabase } from "../config/supabase";
function Home() {
    async function fetchProducts() {
        const { data, error } = await supabase.from("products").select();
        console.log(data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return <h1>home</h1>;
}

export default Home;
