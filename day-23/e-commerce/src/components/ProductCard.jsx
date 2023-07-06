import React from "react";

// use unsplash to get one random photo

function ProductCard({ brand, id, name, price, category }) {
    return (
        <div className=" p-10 bg-zinc-100">
            <img
                className="h-72 w-72 object-cover"
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdemo.weblizar.com%2Fexplora-premium%2Fwp-content%2Fuploads%2Fsites%2F81%2F2016%2F09%2Fdummy-product_2.png&f=1&nofb=1&ipt=1e3529b39bca3e1945a5cbb4db67979f65f009d14592eab9e40483e8d8532da3&ipo=images"
                alt=""
            />

            <h2>
                {brand} {name}
            </h2>

            <h2>{price}</h2>
            <h3>{category}</h3>
        </div>
    );
}

export default ProductCard;
