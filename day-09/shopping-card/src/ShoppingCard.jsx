import jeanImg from "./assets/jean-img.jpg";
import dressImg from "./assets/dress-img.jpg";
import shoeImg from "./assets/shoe-img.jpg";
import topImg from "./assets/top-img.jpg";

import "./ShoppingCard.css";
function ShoppingCard() {
    return (
        <div className="shoppingCard">
            <h1>Shop deals in fashion</h1>
            <div className="itemsContainer">
                <div className="singleImage">
                    <img src={jeanImg} alt="" />
                    <p>jeans under 50$</p>
                </div>
                <div className="singleImage">
                    <img src={dressImg} alt="" />
                    <p>dress under 50$</p>
                </div>
                <div className="singleImage">
                    <img src={shoeImg} alt="" />
                    <p>shoe under 50$</p>
                </div>
                <div className="singleImage">
                    <img src={topImg} alt="" />
                    <p>top under 50$</p>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCard;
