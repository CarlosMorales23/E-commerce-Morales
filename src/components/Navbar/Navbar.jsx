import CartWidget from "./CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {
    let estilo = {
        color:"white",
        TextDecoration: "none"
    }


    return(
        <div className={styles.containerNavbar}>
            <img src="/public/logo192.png" alt="" />
            <ul className={styles.lista}>
                <li><a style={estilo} href="https://listado.mercadolibre.com.ar/remeras-de-futbol#D[A:remeras%20de%20futbol]">Home</a></li>
                <li><a style={estilo} href="https://listado.mercadolibre.com.ar/remeras-de-futbol#D[A:remeras%20de%20futbol]">Productos</a></li>
                <li><a style={estilo} href="https://listado.mercadolibre.com.ar/remeras-de-futbol#D[A:remeras%20de%20futbol]">Contactos</a></li>
                <li><a style={estilo} href="https://listado.mercadolibre.com.ar/remeras-de-futbol#D[A:remeras%20de%20futbol]">Galeria</a></li>
            </ul>
            <CartWidget/>
        </div>
    ) 
};

export default Navbar;
