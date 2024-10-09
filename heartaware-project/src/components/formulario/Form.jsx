import styles from "./Form.module.css";

const FormComponent = () => {
  return (
    <form className={styles.formContainer}>
      <div className="mb-3">
        <label className="form-label">
          <p>Idade</p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} />
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>Sexo</p>
        </label>
        <select className={`form-control ${styles.largeInput}`}>
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
        <select className={`form-control ${styles.largeInput}`}>
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
        <select className={`form-control ${styles.largeInput}`}>
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
        <select className={`form-control ${styles.largeInput}`}>
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
        <input type="number" className={`form-control ${styles.largeInput}`} />
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
            Colesterol <span>(mg/dl)</span>
          </p>
        </label>
        <input type="number" className={`form-control ${styles.largeInput}`} />
      </div>

      <div className="mb-3">
        <label className="form-label">
          <p>
            Açúcar em Jejum <span>(&gt; 120 mg/dl)</span> ?
          </p>
        </label>
        <select className={`form-control ${styles.largeInput}`}>
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
        <select className={`form-control ${styles.largeInput}`}>
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
        <input type="number" className={`form-control ${styles.largeInput}`} />
      </div>
    </form>
  );
};

export default FormComponent;
