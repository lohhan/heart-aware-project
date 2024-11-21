import styles from "./Form.module.css";
// import api from '' // Rota para o arquivo backend
import { useEffect, useState, useRef } from "react";
const FormComponent = () => {

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
  await api.post('/',{ //rota para o post
    age: inputAge.current.value,
    gen: inputGen.current.value,
    ag: inputAg.current.value,
    vasos: inputVasos.current.value,
    pain: inputPain.current.value,
    press: inputPress.current.value,
    coles: inputColes.current.value,
    sugar: inputSugar.current.value,
    eletro: inputEletro.current.value,
    freq: inputFreq.current.value  
  }) 
}

const[results, setResults] = useState([])

async function getResults() {
  const resultsFromApi = await api.get('/') //rota para get dos resultados

  setResults(resultsFromApi.data)
  console.log(results)
}

useEffect(()=>{
  getResults()
}, [])

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
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
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
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
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
          <option value="vasos-1">1</option>
          <option value="vasos-2">2</option>
          <option value="vasos-3">3</option>
          <option value="vasos-4">4</option>
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
          <option value="dor-1">Angina Típica</option>
          <option value="dor-2">Angina Atípica</option>
          <option value="dor-3">Dor não Anginosa</option>
          <option value="dor-4">Assintomática</option>
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
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
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
          <option value="eletro-1">Eletrocardiograma normal</option>
          <option value="eletro-2">Anormalidade na onda ST-T</option>
          <option value="eletro-3">
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

      {results.map((results) => (
        <div> 
          <p>Result: <span>{results.result}</span></p>
        </div>
      ))}
    </form>
  );
};

export default FormComponent;
