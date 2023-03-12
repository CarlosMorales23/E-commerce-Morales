import React from "react";
import "./ProductCard.css"

const ProductCard = ({ title, price = "NO tiene precio", descripcion, stock }) => {
    return (
        <div>
            <h2 className={ stock ? "blue" : "red" }>{title}</h2>
            <h3>{price}</h3>
            <h4>{descripcion}</h4>
            <br />
        </div>
    );
};

export default ProductCard;

//Usar a futuro
// {
//     stock === true ? (
//         <div>
//             <h2>{title}</h2>
//             <h3>{price}</h3>
//             <h4>{descripcion}</h4>
//             <br />
//             <br />
//         </div>
//     ) : null;
// }
