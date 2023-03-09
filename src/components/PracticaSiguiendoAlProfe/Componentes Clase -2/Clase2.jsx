import React from "react";
import ItemListContainer2 from "./ItemListContainer/ItemListContainer2";
import Navbar2 from "./Navbar/Navbar2";
import ProductCard from "./ProductCard/ProductCard";

const Clase3 = () => {
    return (
        <>
            <Navbar2 />
            <ItemListContainer2 />
            <ProductCard title="Producto #1" price={200} stock={true} />
            <ProductCard title="Producto #2" stock={false} />
            <ProductCard title="Producto #3" price={660} stock={true} />
        </>
    );
};

export default Clase3;
