import styles from "./Menu.module.css"

const Menu = () => {
    let estilo = {
        color:"white",
        textDecoration: "none"
    };

    let referencia= "https://listado.mercadolibre.com.ar/remeras-de-futbol#D[A:remeras%20de%20futbol]";


    return (
    <ul className={styles.lista}>
        <li><a style={estilo} href={referencia}>Home</a></li>
        <li><a style={estilo} href={referencia}>Productos</a></li>
        <li><a style={estilo} href={referencia}>Galeria</a></li>
        <li><a style={estilo} href={referencia}>Contacto</a></li>
    </ul>
    )
}

export default Menu