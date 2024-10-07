import styles from "./Header.module.css";
import logo from "../../assets/logo-heartaware.svg"

function Header() {
   return (
      <div className={styles.nav}>
         <div className={styles.content}>
            <img src={logo} />
            <div className={styles.links}>
               <a href="" className={styles.anlgrafica}>Análise Gráfica</a>
               <a href="" className={styles.avcardiaca}>Avaliação Cardíaca</a>
            </div>   
         </div>
      </div>
   );
}

export default Header