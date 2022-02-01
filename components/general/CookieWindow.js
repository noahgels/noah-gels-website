import styles from '../../styles/components/general/CookieWindow.module.css';
import HoveringCard from "./HoveringCard";
import ActionButton from "./ActionButton";
import {useRouter} from "next/router";
import {getCookie, setCookies} from "cookies-next";
import {useState} from "react";
import {initAnalytics} from "../../firebase/Firebase";
import Switch from "./Switch";


export default function CookieWindow(props) {

  const [visible, setVisible] = useState(!getCookie('defined_cookies'));
  const [page, setPage] = useState(0);
  const [analyticsCookie, setAnalyticsCookie] = useState(false);

  console.log(page);

  const router = useRouter();

  const escape = () => {
    setCookies('defined_cookies', true);
    setVisible(false);
  }

  const accept = async () => {
    escape();
    setCookies('analytics_accepted', 'accepted');
    await initAnalytics();
  }

  const decline = async () => {
    escape();
    setCookies('analytics_accepted', 'declined');
  }

  const custom = async () => {
    escape();
    setCookies('analytics_accepted', analyticsCookie ? 'accepted' : 'declined');
  }

  if (!visible) return null;

  return (
    <>
      {page === 0 && <HoveringCard className={`${styles.container} ${router.route === '/' ? styles.animateCookies : ''}`}>
        <div className={styles.title}>Cookies 🍪</div>
        <div className={styles.description}>Ich benutze Cookies, um das beste aus dieser Website zu machen. Du kannst
          mir dabei helfen, indem du sie akzeptierst.
        </div>
        <div className={styles.buttons}>
          <ActionButton className={styles.settings} secondary={true} onClick={() => setPage(1)}>
            Einstellungen
          </ActionButton>
          <ActionButton className={styles.accept} onClick={accept}>
            Akzeptieren
          </ActionButton>
        </div>
      </HoveringCard>}
      {page === 1 && <HoveringCard
        className={`${styles.container} `}
      >
        <div className={styles.title}>Cookie Einstellungen ⚙️</div>
        <div className={styles.description}>

          Anonyme Nutzerdaten helfen mir, Probleme schneller zu finden. Danke an
          jeden, der mir hilft, diese Website zu verbessern

          <div className={styles.cookieType}>
            Google Analytics
            <Switch value={analyticsCookie} setValue={setAnalyticsCookie}/>
          </div>
        </div>
        <div className={styles.buttons}>
          <ActionButton className={styles.settings} secondary={true} onClick={accept}>
            Akzeptieren
          </ActionButton>
          <ActionButton className={styles.settings} secondary={true} onClick={decline}>
            Ablehnen
          </ActionButton>
          <ActionButton className={styles.settings} onClick={custom}>
            Speichern
          </ActionButton>

        </div>
      </HoveringCard>}
    </>
  )
}