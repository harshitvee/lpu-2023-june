import ShoppingCard from "./ShoppingCard";
import styles from "./App.module.css";
import { useState } from "react";
import AddNewCategoryForm from "./AddNewCategoryForm";
function App() {
    const [allCategories, setAllCategories] = useState([
        {
            categoryId: 1,
            category: "gaming",
            products: [
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
                    productTitle: "Headsets",
                    productId: 1,
                },
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
                    productTitle: "Keyboards",
                    productId: 2,
                },
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
                    productTitle: "Computer Mice",
                    productId: 3,
                },
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
                    productTitle: "Chairs",
                    productId: 4,
                },
            ],
        },
        {
            categoryId: 2,
            category: "Fashion",
            products: [
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_BOTTOMS_1x._SY116_CB624172947_.jpg",
                    productTitle: "Jeans",
                    productId: 5,
                },
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_TOPS_1x._SY116_CB623353881_.jpg",
                    productTitle: "Top",
                    productId: 6,
                },
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_DRESSES_1x._SY116_CB623353881_.jpg",
                    productTitle: "Dress",
                    productId: 7,
                },
                {
                    productImage:
                        "https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2022/SITE_FLIPS/SPR_22/GW/DQC/DQC_APR_TBYB_W_SHOES_1x._SY116_CB624172947_.jpg",
                    productTitle: "Shoes",
                    productId: 8,
                },
            ],
        },
    ]);

    function addNewCategory(newCategory) {
        setAllCategories((prevCategories) => [...prevCategories, newCategory]);
    }
    return (
        <main>
            {/* {allCategories.map((productCategory) => (
                <div>
                    <h2>{productCategory.category}</h2>
                    {productCategory.products.map((product) => (
                        <div key={product.productId}>
                            <img
                                src={product.productImage}
                                alt={product.productTitle}
                            />
                            <p>{product.productTitle}</p>
                        </div>
                    ))}
                </div>
            ))} */}
            <AddNewCategoryForm addNewCategory={addNewCategory} />
            <div className={styles.cardsWrapper}>
                {allCategories.map((productCategory) => (
                    <ShoppingCard
                        key={productCategory.categoryId}
                        {...productCategory}
                    />
                ))}
            </div>
        </main>
    );
}

export default App;
