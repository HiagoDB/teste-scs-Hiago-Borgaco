import carro1 from '../img/Carro1Main.svg'
import carro2 from '../img/Carro2Main.svg'
import carro3 from '../img/Carro3Main.svg'
import seta from '../img/seta.svg'
import styles from './Main.module.css'

import Card from '../Card'

export default function Main() {
  return (
    <div className={styles.cardsContainer}>
      <div className={styles.pushArrow}>
      <img className={styles.seta} src={seta} />
      </div>
      <Card carroImg={carro1} dataLanc={'2015'} veloMaxDesc={'180 Km/h'} efiEDesc={'9/10'} classPubDesc={'8/10'} />
      <Card carroImg={carro2} dataLanc={'2015'} veloMaxDesc={'180 Km/h'} efiEDesc={'9/10'} classPubDesc={'8/10'} />
      <Card carroImg={carro3} dataLanc={'2015'} veloMaxDesc={'180 Km/h'} efiEDesc={'9/10'} classPubDesc={'8/10'} />
    </div>
  )
}
