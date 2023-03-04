import styles from "./ItemListPres.module.css";

const ItemListPres = ({gretting}) => {

    return (
        <h1 className={styles.titulo}>{gretting}</h1>    
    )
}

export default ItemListPres