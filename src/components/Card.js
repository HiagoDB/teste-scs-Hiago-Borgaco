import data from "../components/img/data.svg";
import velocidadeMaxima from "../components/img/velocidadeMaxima.svg";
import efiEnergetica from "../components/img/efiEnergetica.svg";
import classificacaoPublico from "../components/img/classificacaoPublico.svg";
import styles from "./Card.module.css";

export default function Card({
  carroImg,
  dataLanc,
  veloMaxDesc,
  efiEDesc,
  classPubDesc,
}) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.cad}>
        <img className={styles.carroCard} src={carroImg} alt="Carro da ford" />
        <div className={styles.cardItem}>
          <p className={styles.textMustang}>Mustang</p>
          <ul className={styles.ulCard}>
            <li className={styles.liItem}>
              <img src={data} alt="data"/>
              <span>{dataLanc}</span>
            </li>
            <li className={styles.liItem}>
              <img src={velocidadeMaxima} alt="velocidade"/>
              <span>{veloMaxDesc}</span>
            </li>
            <li className={styles.liItem}>
              <img src={efiEnergetica} alt="eficiência energetica"/>
              <span>{efiEDesc}</span>
            </li>
            <li className={styles.liItem}>
              <img src={classificacaoPublico} alt="classificação do público"/>
              <span>{classPubDesc}</span>
            </li>
          </ul>
          <button className={styles.cardBtn} >Ver carro</button>
        </div>
      </div>
    </div>
  );
}
