import styles from "./Form.module.css";
import api from '../../services/api' // Rota para o arquivo backend
import Modal from 'react-modal';
import { useState, useRef } from "react";

function FormComponent () {
  
  const [results, setResults] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const inputAge = useRef()
  const inputGen = useRef()
  const inputAg = useRef()
  const inputVasos = useRef()
  const inputPain = useRef()
  const inputPress = useRef()
  const inputColes = useRef()
  const inputSugar = useRef()
  const inputEletro = useRef()
  const inputFreq = useRef()

  async function createResults() {
    const response = await api.post('api/previsao/nova-previsao',{ //rota para o post
      age: inputAge.current.value,
      sexo: inputGen.current.value,
      angina: inputAg.current.value,
      vasos: inputVasos.current.value,
      dor_peito: inputPain.current.value,
      pressao_arterial: inputPress.current.value,
      colesterol: inputColes.current.value,
      acucar: inputSugar.current.value,
      eletro: inputEletro.current.value,
      freq_max: inputFreq.current.value  
    });
    
    const riscoStr = response.data.risco; 
    if (riscoStr == "[1]") {
      setResults("ComRisco");
    } else if (riscoStr == "[0]") {
      setResults("SemRisco");
    }

    setIsModalOpen(true);
  }

  return (
    <form className={styles.formContainer}>
      <div className="mb-3">
        <label className="form-label">
          <p>Age</p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputAge}/>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Sex</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputGen}>
          <option value="" disabled selected>
          Select an option
          </option>
          <option value="1">Masculine</option>
          <option value="0">Feminine</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Exercise-Induced Angina?</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputAg}>
          <option value="" disabled selected>
          Select an option
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Number of Affected Vessels</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputVasos}>
          <option value="" disabled selected>
          Select an option
          </option>
          <option value="0">0</option>
          <option value="1">1 </option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Tipo de Dor no Peito</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputPain}>
          <option value="" disabled selected>
          Select an option
          </option>
          <option value="0">Typical Angina</option>
          <option value="1">Atypical Angina</option>
          <option value="2">Non-anginal pain</option>
          <option value="3">Asymptomatic</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
          Blood Pressure <span>(mm Hg)</span>
          </p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputPress}/>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
          Cholesterol <span>(mg/dl)</span>
          </p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputColes}/>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
          Sugar on Fasting <span>(&gt; 120 mg/dl)</span> ?
          </p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputSugar}>
          <option value="" disabled selected>
          Select an option
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Resting Electrocardiogram</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputEletro}>
          <option value="" disabled selected>
          Select an option
          </option>
          <option value="0">Normal electrocardiogram</option>
          <option value="1">ST-T wave abnormality</option>
          <option value="2">
          Presence of left ventricular hypertrophy
          </option>
        </select>
      </div>

      <div className={`mb-3 ${styles.lastInput}`}>
        <label className="form-label">
          <p>Maximum Heart Rate</p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputFreq}/>
      </div>

      <div className={`mb-3 ${styles.lastInput}`}>
        <label className="form-label">
          <button className={styles.botaogerar} type="button" onClick={createResults}>Generate results</button>
        </label>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        contentLabel="Resultado da Previsão"
        className={styles.modalContent} // Estilize o modal com classes CSS personalizadas
        overlayClassName={styles.overlay} // Estilize a sobreposição do modal
      >
      {results === "ComRisco" ? (
        <>
          <h3>⚠️ Attention: Risk of Heart Problems Detected!</h3>
          <p>Based on the information provided, you may be in a risk group for cardiovascular problems. <br /> We recommend that you see a doctor as soon as possible for a detailed evaluation.</p>
          <br />
          <h3>Tips for your health</h3>
          <ul className={styles.listadicas}>
            <li>Maintain a balanced diet.</li>
            <li>Practice regular exercise.</li>
            <li>Control stress.</li>
          </ul>
          <a className={styles.saibamais} href="https://www.gov.br/saude/pt-br/assuntos/saude-brasil/eu-quero-me-alimentar-melhor/noticias/2022/manter-a-saude-do-coracao-em-dia-depende-de-um-estilo-de-vida-saudavel" target="_blank">Find out more</a>
          <br />
        </>
      ) : (
        <>
          <h3>✅ Everything is fine with your cardiovascular health!</h3>  
          <p>Congratulations! We did not identify any risk signals related to cardiovascular problems based on the information provided.</p>  
        </>
      )}
        <button className={styles.botaofechar} onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </form>

  );
};

export default FormComponent;
