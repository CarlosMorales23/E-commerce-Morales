import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import CartWidget from "./CartWidget/CartWidget";
import styles from "./Navbar.module.css";

const Navbar = () => {

    return(
        <>
            <div className={styles.containerNavbar}>
                <Logo/>
                <Menu/>
                <CartWidget/>
            </div>
        </>

    ) 
};

export default Navbar;
