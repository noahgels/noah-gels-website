import styles from '../styles/Imprint.module.css';
import Footer from "../components/partials/footer/Footer";
import Head from "next/head";

export default function Imprint() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Impressum - Noah Gels</title>
      </Head>
      <main>
        <h1>Impressum</h1>

        <h2>Angaben gemäß § 5 TMG</h2>
        <p>Noah Gels<br />
          Software und Websites<br />
          Wespenweg 16<br />
          49811 Lingen</p>

        <h2>Kontakt</h2>
        <p>Telefon: +49 176 71 29 58 80<br />
          Telefax: 05 91 915 46 32<br />
          E-Mail: noah.gels@noahgels.com</p>

        <h2>EU-Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

        <h2>Verbraucher­streit­beilegung/Universal­schlichtungs­stelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </main>
      <Footer/>
    </div>
  )
}