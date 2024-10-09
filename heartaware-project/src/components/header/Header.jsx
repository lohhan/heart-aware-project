import styles from "./Header.module.css";
import logo from "../../assets/logo-heartaware.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className={styles.nav}>
      <div className={styles.content}>
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className={styles.links}>
          <Link to="/analiseGrafica" className={styles.anlgrafica}>
            Análise Gráfica
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
