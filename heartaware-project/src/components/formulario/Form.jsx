import styles from "./Form.module.css";
import api from '../../services/api' // Rota para o arquivo backend
import Modal from 'react-modal';
import { useEffect, useState, useRef } from "react";
const FormComponent = () => {
const [results, setResults] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar a abertura do modal
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
  const riscoStr = response.data.risco; // Ex: "[1]"
  const risco = parseInt(riscoStr.replace(/[\[\]]/g, ""), 10); // Remove os colchetes e converte para número
  if (risco === 1) {
    setResults("Você tem risco de problemas cardíacos. Consulte um médico.");
  } else if (risco === 0) {
    setResults("Você não tem risco de problemas cardíacos. Continue cuidando da sua saúde!");
  }

  setIsModalOpen(true);
}


async function getResults() {
  const resultsFromApi = await api.get('/') //rota para get dos resultados

  setResults(resultsFromApi.data)
  console.log(results)
}

useEffect(()=>{
  console.log("Resultados atualizados:", results);
}, [results])

  return (
    <form className={styles.formContainer}>
      <div className="mb-3">
        <label className="form-label">
          <p>Idade</p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputAge}/>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Sexo</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputGen}>
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="1">Masculino</option>
          <option value="0">Feminino</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Angina Induzida por Exercício?</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputAg}>
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Número de Vasos Afetados</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputVasos}>
          <option value="" disabled selected>
            Selecione uma opção
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
            Selecione uma opção
          </option>
          <option value="0">Angina Típica</option>
          <option value="1">Angina Atípica</option>
          <option value="2">Dor não Anginosa</option>
          <option value="3">Assintomática</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
            Pressão Arterial <span>(mm Hg)</span>
          </p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputPress}/>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
            Colesterol <span>(mg/dl)</span>
          </p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputColes}/>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
            Açúcar em Jejum <span>(&gt; 120 mg/dl)</span> ?
          </p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputSugar}>
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Eletrocardiograma em Repouso</p>
        </label>
        <select className={`form-control ${styles.largeInput}`} ref={inputEletro}>
          <option value="" disabled selected>
            Selecione uma opção
          </option>
          <option value="0">Eletrocardiograma normal</option>
          <option value="1">Anormalidade na onda ST-T</option>
          <option value="2">
            Presença de hipertrofia ventricular esquerda
          </option>
        </select>
      </div>

      <div className={`mb-3 ${styles.lastInput}`}>
        <label className="form-label">
          <p>Frequência Cardíaca Máxima</p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} ref={inputFreq}/>
      </div>

      <div className={`mb-3 ${styles.lastInput}`}>
        <label className="form-label">
          <button className={styles.botaogerar} type="button" onClick={createResults}>Gerar resultados</button>
        </label>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onRequestClose={() => setIsModalOpen(false)} 
        contentLabel="Resultado da Previsão"
        className={styles.modalContent} // Estilize o modal com classes CSS personalizadas
        overlayClassName={styles.overlay} // Estilize a sobreposição do modal
      >
        <h3>Resultado:</h3>
        <p>{results}</p>
        <button onClick={() => setIsModalOpen(false)}>Fechar</button>
      </Modal>
    </form>

  
      
  );
};

export default FormComponent;
