import styles from "./ItemListPres.module.css";

const ItemListPres = ({ gretting }) => {
    return (
        <div className={styles.titulo}>
            <h1>{gretting}</h1>
        </div>
    );
};

export default ItemListPres;
