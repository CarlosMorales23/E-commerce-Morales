import React from "react";
import Botones from "./Botones/Botones";
import Card from "./Card/Card";
import Formularios from "./Formularios/Formularios";

const PruebasMUI = () => {
    return (
        <div
            style={{
                backgroundColor: "lightgray",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexDirection: "column",
                
            }}
        >
            <Card />
            <Botones/>
            <Formularios/>
        </div>
    );
};

export default PruebasMUI;
