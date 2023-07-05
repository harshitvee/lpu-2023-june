import { useEffect, useState } from "react";
import { supabase } from "../config/supabase";
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
            <ol>
                {products.map((prouduct) => (
                    <li>{prouduct.product_name}</li>
                ))}
            </ol>
        </>
    );
}

export default Home;
