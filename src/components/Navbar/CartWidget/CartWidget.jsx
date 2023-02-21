import { FaShoppingCart } from "react-icons/fa";

const CartWidget = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
            <span>0</span>
            <FaShoppingCart color="white" size={40} />
        </div>
    );
};

export default CartWidget;
