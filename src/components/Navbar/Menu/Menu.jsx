import styles from "./Menu.module.css"

const Menu = () => {
    let estilo = {
        color:"white",
        textDecoration: "none"
    };

    let referencia= "https://listado.mercadolibre.com.ar/remeras-de-futbol#D[A:remeras%20de%20futbol]";


    return (
    <ul className={styles.lista}>
        <li><a style={estilo} href={referencia}>Balones</a></li>
        <li><a style={estilo} href={referencia}>Zapatillas</a></li>
        <li><a style={estilo} href={referencia}>Remeras</a></li>
    </ul>
    )
}

export default Menu