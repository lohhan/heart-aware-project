import styles from "./Header.module.css";
import logo from "../../assets/logo-heartaware.svg"
import { Link } from 'react-router-dom';

function Header() {
   return (
      <div className={styles.nav}>
         <div className={styles.content}>
         <Link to="/"><img src={logo} /></Link>
            <div className={styles.links}>
               {/* <a href="" className={styles.anlgrafica}><link rel="stylesheet" href="/analiseGrafica" />Análise Gráfica</a>    */}
               <Link to="/analiseGrafica" className={styles.anlgrafica}>Análise Gráfica</Link>
               <a href="" className={styles.avcardiaca}>Avaliação Cardíaca</a>
            </div>   
         </div>
      </div>
   );
}

export default Header