import { useEffect, useState } from "react";
import styles from './Calculadora.module.css'

function Calculadora() {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [imc, setImc] = useState(null);

    useEffect(function() {
        if (peso > 0 && altura > 0) {
            let alturaMetros = altura / 100;
            let calculoImc = peso / (alturaMetros * alturaMetros)
            setImc(calculoImc.toFixed(2));  
        } else {
            setImc(null)
        }
    }, [altura, peso])

    return (
        <div className={styles.body}>
            <div className={styles.calculadora}>
                <h1 className={styles.title}>CALCULADORA DE IMC</h1>
                <input className={styles.input} type="number"  placeholder="altura cm" onChange={e => setAltura(parseInt(e.target.value))}/>
                <input className={styles.input} type="number" placeholder="peso kg" onChange={e => setPeso(parseInt(e.target.value))}/>
                <h2 className={styles.title2}>Seu IMC é:</h2>
                {imc !== null ? (
                    <p className={styles.resultado}>{imc} kg/m2</p>
                ) : (
                    <p></p>
                )}

                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>IMC</th>
                            <th>Classificação</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>&lt; 18,5 kg/m2</td>
                            <td>Abaixo do Peso</td>
                        </tr>
                        <tr>
                            <td>&ge; 18,5 kg/m2 e &lt; 24,9 kg/m2 </td>
                            <td>Peso Normal</td>
                        </tr>
                        <tr>
                            <td>&ge; 25 kg/m2 e &lt; 29,9 kg/m2 </td>
                            <td>Excesso de Peso</td>
                        </tr>
                        <tr>
                            <td>&ge; 30 kg/m2 e &lt; 34,9 kg/m2 </td>
                            <td>Obesidade grau I</td>
                        </tr>
                        <tr>
                            <td>&ge; 35 kg/m2 e &lt; 39,9 kg/m2 </td>
                            <td>Obesidade grau II</td>
                        </tr>
                        <tr>
                            <td>&gt; 40 kg/m2 </td>
                            <td>Obesidade grau III</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="tabela">
                
            </div>
        </div>
    )
}

export default Calculadora;