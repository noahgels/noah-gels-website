import styles from '../styles/404.module.css';
import ActionButton from "../components/general/ActionButton";
import Link from 'next/link';
import MyHead from "../components/general/MyHead";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <MyHead title={'Nicht gefunden - Noah Gels'}/>
      <main className={styles.main}>
        <div className={styles.row}>
          <div className={styles.status}>404</div>
          <p className={styles.text}>Diese Seite existiert nicht</p>
        </div>
        <Link href={'/'}>
          <a>
            <ActionButton>
              Zur Startseite
            </ActionButton>
          </a>
        </Link>
      </main>
    </div>
  )
}