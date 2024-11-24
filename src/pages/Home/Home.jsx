import styles from "./Home.module.css";
import icon1 from "../../assets/Home/icone1.svg";
import icon2 from "../../assets/Home/icone2.svg";
import icon3 from "../../assets/Home/icone3.svg";
import FormComponent from "../../components/formulario/Form";


function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.introducao}>
        <p className={styles.introducaoTitulo}>
        Welcome to <span>HeartAware!</span>
        </p>
        <p>
        HeartAware is your ally in heart health, helping you identify signs of possible heart attacks.
        </p>
      </div>
      <div className={styles.avaliacao}>
        <p className={styles.avaliacaoTitulo}>Cardiac Assessment</p>
        <div className={styles.avaliacaoIcones}>
          <div className={styles.icone1}>
            <img src={icon1} />
            <p>
            You can perform a simple and effective test to identify
            possible signs of heart attack risk.
            </p>
          </div>
          <div className={styles.icone2}>
            <img src={icon2} />
            <p>
            Based on your responses and personal information, our
              advanced technology will analyze your data and provide an assessment
              detailed information, helping you make informed decisions about your
              health.
            </p>
          </div>
          <div className={styles.icone3}>
            <img src={icon3} />
            <p>
            Prioritize your well-being and pay attention to the signals from your heart!
            </p>
          </div>
          <br />
          <FormComponent />
        </div>
      </div>
    </div>
  );
}

export default Home;
