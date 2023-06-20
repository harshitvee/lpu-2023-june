import { useState } from "react";
import { v4 as uuid } from "uuid";
function AddNewCategoryForm({ addNewCategory }) {
    const [categoryName, setCategoryName] = useState("");
    const [productName1, setProductName1] = useState("");
    const [productName2, setProductName2] = useState("");
    const [productName3, setProductName3] = useState("");
    const [productName4, setProductName4] = useState("");
    const [productImageUrl1, setProductImageUrl1] = useState("");
    const [productImageUrl2, setProductImageUrl2] = useState("");
    const [productImageUrl3, setProductImageUrl3] = useState("");
    const [productImageUrl4, setProductImageUrl4] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        // {
        //     categoryId: 1,
        //     category: "gaming",
        //     products: [
        //         {
        //             productImage:
        //                 "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg",
        //             productTitle: "Headsets",
        //             productId: 1,
        //         },
        //         {
        //             productImage:
        //                 "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg",
        //             productTitle: "Keyboards",
        //             productId: 2,
        //         },
        //         {
        //             productImage:
        //                 "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Mouse_1x._SY116_CB667159063_.jpg",
        //             productTitle: "Computer Mice",
        //             productId: 3,
        //         },
        //         {
        //             productImage:
        //                 "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg",
        //             productTitle: "Chairs",
        //             productId: 4,
        //         },
        //     ],
        // },
        const newCategory = {
            categoryId: uuid(),
            category: categoryName,
            products: [
                {
                    productId: uuid(),
                    productTitle: productName1,
                    productImage: productImageUrl1,
                },
                {
                    productId: uuid(),
                    productTitle: productName2,
                    productImage: productImageUrl2,
                },
                {
                    productId: uuid(),
                    productTitle: productName3,
                    productImage: productImageUrl3,
                },
                {
                    productId: uuid(),
                    productTitle: productName4,
                    productImage: productImageUrl4,
                },
            ],
        };
        addNewCategory(newCategory);
    }
    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
            <h2>Add New Category</h2>
            <label htmlFor="categoryName">Category Name</label>
            <input
                type="text"
                name="categoryName"
                id="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
            />
            <h3>Add products Details</h3>
            <h4>Add Details for 1st product</h4>
            <label htmlFor="productName1">Product Name</label>
            <input
                type="text"
                name="productName1"
                id="productName1"
                value={productName1}
                onChange={(e) => {
                    setProductName1(e.target.value);
                }}
            />
            <label htmlFor="productImage1">Product Image</label>
            <input
                type="text"
                name="productImage1"
                id="productImage1"
                value={productImageUrl1}
                onChange={(e) => {
                    setProductImageUrl1(e.target.value);
                }}
            />
            <h4>Add Details for 2nd product</h4>
            <label htmlFor="productName2">Product Name</label>
            <input
                type="text"
                name="productName2"
                id="productName2"
                value={productName2}
                onChange={(e) => {
                    setProductName2(e.target.value);
                }}
            />
            <label htmlFor="productImage2">Product Image</label>
            <input
                type="text"
                name="productImage2"
                id="productImage2"
                value={productImageUrl2}
                onChange={(e) => {
                    setProductImageUrl2(e.target.value);
                }}
            />
            <h4>Add Details for 3rd product</h4>
            <label htmlFor="productName3">Product Name</label>
            <input
                type="text"
                name="productName3"
                id="productName3"
                value={productName3}
                onChange={(e) => {
                    setProductName3(e.target.value);
                }}
            />
            <label htmlFor="productImage3">Product Image</label>
            <input
                type="text"
                name="productImage3"
                id="productImage3"
                value={productImageUrl3}
                onChange={(e) => {
                    setProductImageUrl3(e.target.value);
                }}
            />
            <h4>Add Details for 4th product</h4>
            <label htmlFor="productName4">Product Name</label>
            <input
                type="text"
                name="productName4"
                id="productName4"
                value={productName4}
                onChange={(e) => {
                    setProductName4(e.target.value);
                }}
            />
            <label htmlFor="productImage4">Product Image</label>
            <input
                type="text"
                name="productImage4"
                id="productImage4"
                value={productImageUrl4}
                onChange={(e) => {
                    setProductImageUrl4(e.target.value);
                }}
            />
            <button type="submit">Add Category</button>
        </form>
    );
}

export default AddNewCategoryForm;
