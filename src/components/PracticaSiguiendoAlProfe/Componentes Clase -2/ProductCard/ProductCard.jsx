import React from "react";

const ProductCard = ({title, price, isRed}) => {
    return (
        <div>
            <h1 className={isRed ? "red" : ""}>{title}</h1>
            <h2>{price}</h2>
        </div>
    );
};

export default ProductCard;
