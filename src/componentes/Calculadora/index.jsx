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

    let classificacao = '';
    if (imc < 18.5) {
        classificacao = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = 'Excesso de Peso';
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = 'Obesidade grau 1';
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = 'Obesidade grau 2';
    } else {
        classificacao = 'Obesidade grau 3';
    }

    return (
        <div className={styles.body}>
            <div className={styles.calculadora}>
                <h1 className={styles.title}>CALCULADORA DE IMC</h1>
                <input className={styles.input} type="number"  placeholder="altura cm" onChange={e => setAltura(parseInt(e.target.value))}/>
                <input className={styles.input} type="number" placeholder="peso kg" onChange={e => setPeso(parseInt(e.target.value))}/>
                <h2 className={styles.title2}>Seu IMC é:</h2>
                {imc !== null ? (
                    <p className={styles.resultado}>{imc} kg/m2 -- {classificacao}</p>
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