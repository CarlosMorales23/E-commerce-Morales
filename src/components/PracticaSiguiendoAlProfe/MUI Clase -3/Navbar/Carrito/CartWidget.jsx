import React from "react";
import {BsCartFill} from "react-icons/bs"
//Importante agregar la carpeta en este caso "bs" donde se encuentra el icon, lo indica su nombre. 
//npm uninstal react-icons para  desinstalar


const CartWidget = () => {
        return (
                <div>
                        <span>agregados: 1</span>
                        <BsCartFill size={50}/>
                </div>
        );
};

export default CartWidget;
