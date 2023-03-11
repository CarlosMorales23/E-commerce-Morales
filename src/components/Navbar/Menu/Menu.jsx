import React from "react";
import styles from "./Menu.module.css"

const Menu = () => {
    return (
        <ul className={styles.menu}>
            <li>Futlbol</li>
            <li>Beisbol</li>
            <li>Basket</li>
        </ul>
    );
};

export default Menu;
