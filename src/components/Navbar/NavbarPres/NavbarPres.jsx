import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./NavbarPres.module.css"


const NavbarPres = () => {
    return (
        <div className={styles.navbarContainer}
        >
            <Logo />
            <Menu />
            <CartWidget />
        </div>
    );
};

export default NavbarPres;
