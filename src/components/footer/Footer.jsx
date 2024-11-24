import styles from "./Footer.module.css";
import logo from "../../assets/logo-heartaware.svg"

function Footer(){
    return (
        <footer>
        <div className={styles.footerContainer}>
            <div className={styles.footerInfos}>
                <p>Copyright © 2024 |</p>
                <img src={logo}/>
            </div>
        </div>
        </footer>
    );
}

export default Footer