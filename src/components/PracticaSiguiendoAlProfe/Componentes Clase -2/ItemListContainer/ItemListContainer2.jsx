import React from "react";
import styles from "./ItemListContainer.module.css"

const ItemListContainer2 = () => {
    return (
        <div>
            <h1>Container List</h1>
            <ul className = {styles.containerList}>
                <li>Producto 1</li>
                <li>Producto 2</li>
                <li>Producto 3</li>
                <li>Producto 4</li>
                <li>Producto 5</li>
            </ul>
        </div>
    );
};

export default ItemListContainer2;
