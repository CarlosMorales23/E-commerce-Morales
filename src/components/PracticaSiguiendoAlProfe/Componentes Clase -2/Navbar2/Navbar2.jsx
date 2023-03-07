
import Logo from "./Logo/Logo";
import CartWidget from "./CartWidget/CartWidget";
import Menu from "./Menu/Menu";

const Navbar2 = ()=>{

    let nombre= "Carlos"

    return (
        <div>
            <Logo />
            <Menu />
            <CartWidget />

            <h2 style={{ color: "red", marginTop: "100px" }}>{nombre}</h2>
        </div>
    );
}

export default Navbar2;