import logo from '../img/logo.svg'
import carroHeader from '../img/carroHome.svg'
import perfilIco from '../img/perfil.svg'
import styles from './Navbar.module.css'

export default function Navbar(){
  return(

    <header>
      <nav className={styles.navigation}>
        <div>
          <li ><a href='#'><img className={styles.logo} src={logo} alt='logo'/></a></li>
        </div>
        <div>
          <ul className={styles.list}>
            <li className={styles.item}><a href='#'>Home</a></li>
            <li className={styles.item}><a href='#'>Sobre</a></li>
            <li className={styles.item}><a href='#'>Tabela</a></li>
            <li className={styles.item}><a href='#'>Fale conosco</a></li>
          </ul>
        </div>
        <div>
          <ul className={styles.listProfile}>
            <li className={styles.item}><a href='#'>Entrar</a></li>
            <li className={styles.item}><a href='#'><img src={perfilIco} alt='icone de perfil' /></a></li>
          </ul>
        </div>
      </nav>
      <section>
        <img className={styles.carroHeader} src={carroHeader} alt="Mustang"/>
      </section>
    </header>
    

  )
}