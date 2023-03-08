import React from "react";
import "./ProductCard.css";

const ProductCard = ({title, price = "no tiene precio", stock}) => {
    return (
        <div>
            <h1 className={stock ? "blue" : "red"}>{title}</h1>
            <h2>{price}</h2>
        </div>
    );
};

export default ProductCard;
