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
                <h1>Introdução</h1>
                <p>O risco de ataque cardíaco é uma preocupação importante, com as doenças cardiovasculares representando 31% das mortes globais, segundo a OMS. 
                    Identificar fatores de risco, como idade, colesterol e pressão arterial, é crucial para a prevenção. 
                    Este estudo visa investigar essas variáveis e desenvolver um modelo preditivo para identificar pessoas com maior risco, 
                    buscando melhorar a prevenção e a tomada de decisões na saúde.</p>
            </div>
            <div className={styles.graficos}>
                <div className={styles.graficosLinha}>
                    <div className={styles.graficosSolo}>
                    <h1>Idade</h1>
                    <img src={idade} alt="" />
                    <p>Conclui-se que a idade mais frequente esteve na faixa de 50-60.</p>
                    </div>

                    <div className={styles.graficosSolo}>
                    <h1>Sexo</h1>
                    <img src={sexo} alt="" />
                    <p>Após o balanceamento da base, a distribuição de gênero ficou 50/50.</p>
                    </div>

                    <div className={styles.graficosSolo}>
                    <h1>Angina induzida por exercício</h1>
                    <img src={pressao} alt="" />
                    <p>Conclui-se que aproximadamente 3/10 dos pacientes sofrem com angina após exercícios físicos.</p>
                    </div>
                </div>

                <div className={styles.graficosLinha2}>
                <div className={styles.graficosSolo}>
                <h1>Tipos de Dor no peito</h1>
                    <img src={dor} alt="" />
                    <p>O tipo de dor mais frequente é o de Angina Típica.</p>
                </div>
                <div className={styles.graficosSolo}>
                    <h1>Frequência Máxima</h1>
                    <img src={colesterol} alt="" />
                    <p>As maiores frequências registradas estão na faixa entre 160-170.</p>
                </div>
                <div className={styles.graficosSolo}>
                    <h1>Açúcar no Sangue</h1>
                    <img src={acucar} alt="" />
                    <p>Conclui-se que a grande maioria dos pacientes possuem glicose maior que 120mg/dl.</p>
                </div>
                </div>
            </div>
            <div className={styles.matrizCo}>
                <div className={styles.matrizConteudo}>
                <h1>Matriz de Correlação</h1>
                <img src={matriz} alt="" />
                </div>
            </div>
            <div className={styles.analiseConclusao}>
                <div className={styles.analiseConclusaoTexto}>
                    <h1>Insights</h1>
                    <p>A análise mostrou um aumento significativo de risco de ataque cardíaco entre 35 e 55 anos, 
                        que se estabiliza após os 55 e volta a crescer a partir dos 70. Nos idosos, esse risco é esperado devido a fatores como idade avançada e 
                        doenças crônicas. Já nos adultos, a situação parece estar ligada a um estilo de vida pouco saudável.
                        <br /><br />
                        Uma possível explicação é a dieta moderna, rica em gorduras e alimentos processados, 
                        combinada com falta de exercícios e altos níveis de estresse. Esses fatores elevam a pressão arterial e favorecem o acúmulo de placas nas artérias, 
                        contribuindo para o risco cardíaco. Dessa forma, políticas de prevenção devem focar também em educar essa faixa etária sobre a importância de 
                        hábitos mais saudáveis, ajudando a reduzir as ocorrências de problemas cardíacos precoces.</p>
                </div>
                <img src={distribuicao} alt="" />
            </div>
        </div>
    );
}

export default Analise