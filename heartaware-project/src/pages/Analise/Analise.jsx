import styles from "./Analise.module.css"
import idade from "../../assets/Analise/idade.svg"
import sexo from "../../assets/Analise/sexo.svg"
import dor from "../../assets/Analise/dor.svg"
import pressao from "../../assets/Analise/pressao.svg"
import colesterol from "../../assets/Analise/colesterol.svg"
import acucar from "../../assets/Analise/acucar.svg"
import matriz from "../../assets/Analise/matriz.svg"
import distribuicao from "../../assets/Analise/distribuicao.svg"

function Analise(){
    return(
        <div className={styles.analiseContainer}>
            <div className={styles.analiseIntro}>
                <h1>Introduction</h1>
                <p>The risk of heart attack is a significant concern, with cardiovascular diseases accounting for 31% of global deaths, according to the WHO. 
                    Identifying risk factors such as age, cholesterol, and blood pressure is crucial for prevention. 
                    This study aims to investigate these variables and develop a predictive model to identify individuals at higher risk, 
                    seeking to improve prevention and decision-making in healthcare.</p>
            </div>
            <div className={styles.graficos}>
                <div className={styles.graficosLinha}>
                    <div className={styles.graficosSolo}>
                    <h1>Age</h1>
                    <img src={idade} alt="" />
                    <p>It is concluded that the most frequent age range was between 55 and 65.</p>
                    </div>

                    <div className={styles.graficosSolo}>
                    <h1>Sex</h1>
                    <img src={sexo} alt="" />
                    <p>After balancing the dataset, the gender distribution was 68.8/31.2.</p>
                    </div>

                    <div className={styles.graficosSolo}>
                    <h1>Exercise-induced angina</h1>
                    <img src={pressao} alt="" />
                    <p>It is concluded that approximately 3/10 of patients suffer from angina after physical exercise.</p>
                    </div>
                </div>

                <div className={styles.graficosLinha2}>
                <div className={styles.graficosSolo}>
                <h1>Types of Chest Pain</h1>
                    <img src={dor} alt="" />
                    <p>The most common type of pain is Typical Angina.</p>
                </div>
                <div className={styles.graficosSolo}>
                    <h1>Maximum Frequency</h1>
                    <img src={colesterol} alt="" />
                    <p>The highest recorded frequencies are in the range between 155-170.</p>
                </div>
                <div className={styles.graficosSolo}>
                    <h1>Blood Sugar</h1>
                    <img src={acucar} alt="" />
                    <p>It is concluded that the vast majority of patients have glucose levels greater than 120 mg/dl.</p>
                </div>
                </div>
            </div>
            <div className={styles.matrizCo}>
                <div className={styles.matrizConteudo}>
                <h1>Correlation Matrix</h1>
                <img src={matriz} alt="" />
                </div>
            </div>
            <div className={styles.analiseConclusao}>
                <div className={styles.analiseConclusaoTexto}>
                    <h1>Insights</h1>
                    <p>The analysis showed a significant increase in the risk of heart attack between the ages of 35 and 55, 
                        which stabilizes after 55 and rises again from 70 onward. Among the elderly, 
                        this risk is expected due to factors such as advanced age and chronic diseases. 
                        In adults, however, the situation seems to be linked to an unhealthy lifestyle.
                        <br /><br />
                        A possible explanation is the modern diet, high in fats and processed foods, combined with a lack of exercise and high levels of stress. 
                        These factors increase blood pressure and promote plaque buildup in the arteries, contributing to cardiac risk. 
                        Thus, prevention policies should also focus on educating this age group about the importance of healthier habits, 
                        helping to reduce the occurrence of early heart problems.</p>
                </div>
                <img src={distribuicao} alt="" />
            </div>
        </div>
    );
}

export default Analise