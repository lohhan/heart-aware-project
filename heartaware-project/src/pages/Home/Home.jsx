import styles from "./Home.module.css";
import icon1 from "../../assets/Home/icone1.svg"
import icon2 from "../../assets/Home/icone2.svg"
import icon3 from "../../assets/Home/icone3.svg"
import Form from 'react-bootstrap/Form';
function Home() {
   return (
      <div className= {styles.container}>
         <div className= {styles.introducao}>
            <p className={styles.introducaoTitulo}>Bem-vindo ao <span>HeartAware!</span></p>
            <p>O HeartAware é seu aliado na saúde cardíaca, ajudando a identificar sinais de possíveis ataques cardíacos.</p>
         </div>
         <div className={styles.avaliacao}>
            <p className={styles.avaliacaoTitulo}>Avaliacao Cardiaca</p>
            <div className={styles.avaliacaoIcones}>
             <div className={styles.icone1}>
              <img src={icon1}/>
              <p>Você pode realizar um teste simples e eficaz para identificar possíveis sinais de risco de ataque cardíaco.</p>
               </div>
               <div className={styles.icone2}>
              <img src={icon2}/>
              <p>Com base em suas respostas e informações pessoais, nossa tecnologia avançada analisará seus dados e fornecerá uma avaliação detalhada,
               ajudando você a tomar decisões informadas sobre sua saúde.</p>
             </div>
             <div className={styles.icone3}>
             <img src={icon3}/>
               <p>Priorize seu bem-estar e fique atento aos sinais do seu coração!</p>
            </div>
            </div>

            <div className={styles.formularios}>
               <div className={styles.formulario1}>
               <Form className={styles.formulario1}>
                  <Form.Group className={styles.mb-3} controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className={styles.mb-3} controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
               </Form>
               </div>       
            </div>       
         </div>
      </div>
   );
}

export default Home