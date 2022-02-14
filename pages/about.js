import ActionButton from "../components/general/ActionButton";
import Link from "next/link";
import Head from 'next/head';
import MyHead from "../components/general/MyHead";

export default function About() {

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <Head>
        <MyHead title={'Über mich - Noah Gels'}/>
      </Head>
      <article style={{textAlign: 'center'}}>
        <h1>
          Diese Seite ist aktuell in Bau 🏗
        </h1>
        Bei Fragen bin ich immer unter meiner Email{' '}
        <a href={'mailto:kontakt@noahgels.com'}>kontakt@noahgels.com</a>
        {' '}erreichbar
      </article>
      <Link href={'/'}>
        <a style={{
          marginTop: '1.6rem',
        }}>
          <ActionButton>
            Zur Startseite
          </ActionButton>
        </a>
      </Link>
    </div>
  )
}