import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}> 
      <div className={styles.aa}></div>
      <div className={styles.divText}>
        <h1>Mustang</h1>
        <p>O Ford Mustang é um automóvel desportivo produzido pela</p>
        <p>Ford Motor Company. O carro foi apresentado ao público em</p> 
        <p>17 de abril de 1964 durante a New York World's Fair. O</p> 
        <p>Mustang, apesar de ter sofrido grandes alterações ao longo</p>   
        <p>dos anos é a mais antiga linha de automóveis da Ford.</p>
        <div className={styles.divBtn}>
          <button className={styles.btnFooter}>Ver carros</button>
        </div>  
      </div>      
    </div>
  );
}
