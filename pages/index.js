import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SideMenu from "../components/partials/header/SideMenu";
import YouNeedAWebsite from "../components/pages/home/header/YouNeedAWebsite";
import {logEvent} from "../firebase/Firebase";
import Link from 'next/link';
import {useEffect} from "react";
import Footer from "../components/partials/footer/Footer";
import ActionButton from "../components/general/ActionButton";

export default function Home() {

  useEffect(() => {
    logEvent('landing_page')
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Websites und Apps - Noah Gels</title>
      </Head>
      <header className={styles.header}>
        <YouNeedAWebsite/>
      </header>

      <main className={styles.main}>
        <section className={styles.bigSize}>
          <h2>
            Denn genau dort wirst du gefunden!
          </h2>
          <p className={styles.paragraph}>
            Jeden Tag werden etwa 5.5 Milliarden Websites auf Google gesucht. All diese Menschen suchen jemanden, der
            ihnen weiterhilft. Kannst du anderen helfen? Worauf wartest du noch?
          </p>
        </section>
        <section className={styles.bigSize}>
          <h2>
            Lass uns das Richtige für Sie finden
          </h2>
          <p className={styles.paragraph}>Eine persönliche Website, einen Online Shop oder auch eine coole App um Kunden auf dem laufenden
            zu halten. Geht nicht gibt{"'"}s nicht.</p>
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
            Wer bin ich?
          </h2>
          <p className={styles.paragraph}>Hi, ich bin Noah und komme aus Lingen (Ems). Seit ich 13 bin programmiere ich
            Mobile Apps und Websites. Etwa genau so lange benutze ich das Internet und habe eines feststellen können -
            Sehr viele Websites sind veraltet, unübersichtlich oder langsam. Kann man nicht eine Website schaffen, so
            schnell wie eine App und so eindeutig wie ein Flyer? Ja das kann man! Mein Ziel ist es, das Internet durch
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
  )
}
