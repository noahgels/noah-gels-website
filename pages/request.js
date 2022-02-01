import Head from 'next/head';
import styles from '../styles/Request.module.css';
import Footer from "../components/partials/footer/Footer";
import {useState} from "react";
import ActionButton from "../components/general/ActionButton";
import {addRequest} from "../firebase/Database";
import HoveringCard from '../components/general/HoveringCard';


export default function Request() {

  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');
  const [displayHint, setDisplayHint] = useState(false);

  const send = () => {
    if (!(email && content)) {
      setDisplayHint(true);
      return;
    }
    addRequest(email, content);
    setSent(true);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Anfrage - Noah Gels</title>
      </Head>
      <main className={styles.main}>
        <HoveringCard className={styles.card}>
          <h1 className={styles.title}>Anfrage</h1>
          {sent ? <p className={styles.success}>Vielen Dank für deine Anfrage</p> :
            <>
              <input
              type="text"
              placeholder="Email"
              name="email"
              className={styles.input}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{
                marginBottom: '0.7rem',
              }}
            />
              <textarea
                placeholder="Wie kann ich dir weiterhelfen"
                name="content"
                className={styles.input}
                rows={10}
                onChange={(e) => {
                  setContent(e.target.value);
                }}
              />
              {displayHint && <p className={styles.hint}>Beide Felder müssen ausgefüllt werden</p>}
              <ActionButton
                style={{marginTop: '0.5rem'}}
                onClick={send}
              >
                Senden
              </ActionButton>
            </>}
        </HoveringCard>
      </main>
      <Footer/>
    </div>
  )
}