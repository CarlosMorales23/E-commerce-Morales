import { Typography } from "@mui/material";
import React from "react";
import CustomCard from "./CustomCard";

const CustomCardContainer = () => {
    return (
        <>
            <Typography variant="h3" align="center" color="blue" fontWeight="bold"> Estos son nuestros productos</Typography>
            {/* Varian es la etiqueta, despues coloca estilos */}
            <CustomCard title={"Nike"}/>
            <CustomCard title={"Fila"}/>
            <CustomCard title={"Adidas"}/>
        </>
    );
};

export default CustomCardContainer;
