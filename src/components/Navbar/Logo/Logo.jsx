import styles from "./Logo.module.css";


const Logo = () => {
    return (
        <img className={styles.logo} src="https://res.cloudinary.com/dybsirwia/image/upload/v1677811224/E-commerce/i_lr7dus.png" alt="logo" width={"160px"} height={"100px"}/>
    );
};

export default Logo;
