import ItemListPres from './ItemListPres';
import styles from "./ItemListPres.module.css";

const ItemListContainer = ({tituloTemporal}) => {
    return (
        <>
            <ItemListPres className={styles.titulo} gretting={tituloTemporal} />
        </>
    )
}

export default ItemListContainer