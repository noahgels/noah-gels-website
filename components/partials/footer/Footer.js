import styles from '../../../styles/components/partials/footer/Footer.module.css';
import Link from "next/link";


export default function Footer() {


  return (
    <footer className={styles.container}>
      <hr className={styles.hr}/>
      <div className={styles.mainContent}>
        <div className={styles.line}>
          Copyright © 2022 Noah Gels <img src={'/images/clean-logo.png'} className={styles.logo} alt="NG Logo Small"/>
        </div>
        <div className={styles.links}>
          <Link href={'/imprint'}>
            <a>
              Impressum
            </a>
          </Link>
          <Link href={'/privacy'}>
            <a>
              Datenschutz
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
