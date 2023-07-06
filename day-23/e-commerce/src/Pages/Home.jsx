import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
import Products from "../components/Products";
function Home() {
    const [products, setProducts] = useState([]);
    async function fetchProducts() {
        const { data, error } = await supabase.from("products").select();
        setProducts(data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <>
            <Products products={products} />
        </>
    );
}

export default Home;
