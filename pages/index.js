import Head from 'next/head';
import styles from '../styles/Home.module.css';
import SideMenu from '../components/partials/header/SideMenu';
import YouNeedAWebsite from '../components/pages/home/header/YouNeedAWebsite';
import {logEvent} from '../firebase/Firebase';
import Link from 'next/link';
import {useEffect} from 'react';
import Footer from '../components/partials/footer/Footer';
import ActionButton from '../components/general/ActionButton';
import MyHead from '../components/general/MyHead';

export default function Home() {

  useEffect(() => {
    logEvent('landing_page');
  }, []);

  return (
    <div className={styles.container}>
      <MyHead title={'Apps und Websites - Noah Gels'}/>
      <header className={styles.header}>
        <h1 style={{display: 'none'}}>Apps und Websites - Noah Gels</h1>
        <YouNeedAWebsite/>
      </header>

      <main className={styles.main}>
        <section
          style={{
            marginTop: '5rem',
          }}
          className={styles.bigSize}>
          <h2>
            Und ich zeige dir jetzt, wieso! 🌎
          </h2>
          <p className={styles.paragraph}>
            Jeden Tag werden etwa 5.5 Milliarden Websites auf Google gesucht.
            All diese Menschen suchen nach einer Information, einem Produkt oder
            anderen Menschen. Mit deiner Website kannst du von diesen Menschen
            gefunden werden und ihnen weiterhelfen.
          </p>
        </section>
        <section className={styles.bigSize}>
          <h2>
            Lass uns das Richtige für Dich finden 🔎
          </h2>
          <p className={styles.paragraph}>Eine persönliche Website, einen Online
            Shop oder auch eine coole App um Kunden auf dem laufenden
            zu halten. Geht nicht gibt&apos;s nicht.</p>
          <Link href={'/request'}>
            <a>
              <ActionButton>
                Kontakt
              </ActionButton>
            </a>
          </Link>
        </section>
        <section className={styles.bigSize}>
          <h2>
            Wer bin ich? 👤
          </h2>
          <p className={styles.paragraph}>Hi, ich bin Noah und komme aus Lingen
            (Ems). Seit ich 13 bin programmiere ich
            Mobile Apps und Websites. Etwa genau so lange benutze ich das
            Internet und habe eines feststellen können -
            Sehr viele Websites sind veraltet, unübersichtlich oder langsam.
            Kann man nicht eine Website schaffen, so
            schnell wie eine App und so eindeutig wie ein Flyer? Ja das kann
            man! Mein Ziel ist es, das Internet durch
            solche Websites zu einem übersichtlicheren Ort für jeden zu machen.
          </p>
          <Link href={'/about'}>
            <a>
              <ActionButton>
                Über mich
              </ActionButton>
            </a>
          </Link>
        </section>
      </main>

      <Footer/>
    </div>
  );
}
