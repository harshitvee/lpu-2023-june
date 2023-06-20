import React from "react";
import SingleProduct from "./SingleProduct";
import styles from "./ShoppingCard.module.css";

function ShoppingCard({ category, products }) {
    return (
        <div className={styles.shoppingCard}>
            <h2>{category}</h2>
            {/* {products.map((product) => (
                <div key={product.productId}>
                    <img
                        src={product.productImage}
                        alt={product.productTitle}
                    />
                    <p>{product.productTitle}</p>
                </div>
            ))} */}
            <div className={styles.productWrapper}>
                {products.map((product) => (
                    <SingleProduct key={product.productId} {...product} />
                ))}
            </div>
        </div>
    );
}

export default ShoppingCard;
