import CartWidget from "./Carrito/CartWidget";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
//Estilos en linea

//Estilos en css
//import "./Navbar2.css";

//Modulos en CSS
import styles from "./Navbar2.module.css"

const Navbar2 = ()=>{

    return (
        <div className={styles.containerNavbar}>
            <Logo />
            <Menu />
            <CartWidget />
        </div>
    );
}

export default Navbar2;