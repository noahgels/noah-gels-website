import styles from '../../../styles/components/partials/header/Sidemenu.module.css';
import Link from 'next/link';
import {useState} from "react";

const siteList = [
  ['', 'Home'],
  ['request', 'Anfragen'],
  ['privacy', 'Datenschutz'],
  ['imprint', 'Impressum'],
];

export default function SideMenu() {

  const [menuShown, setMenuShown] = useState(false);

  const toggleNavigation = () => {
    setMenuShown(!menuShown);
  }

  const linkPressed = () => {
    setMenuShown(false);
  }

  return (
    <nav className={styles.container}>
      <div className={`${styles.navBg} ${menuShown ? styles.navBgShown : ''}`} onClick={() => setMenuShown(false)}/>
      <div className={`${styles.menu} ${menuShown ? styles.menuShown : styles.menuHidden}`}>
        <ul className={styles.list}>
          {siteList.map(([route, title]) =>
            <Link href={'/' + route} key={route}>
              <a className={styles.link} onClick={linkPressed}>
                <li className={`${styles.menuItem}`}>
                  {title}
                </li>
              </a>
            </Link>
          )}
        </ul>
      </div>
      <div className={styles.topBar}>
        <button className={`${styles.opener} button`} onClick={toggleNavigation}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
               width="32" height="32"
               viewBox="0 0 122.879 103.609"
               style={{fill: '#fff'}}>
            <path
              d="M10.368,0h102.144c5.703,0,10.367,4.665,10.367,10.367v0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,20.735,0,16.07,0,10.368v0C0,4.665,4.666,0,10.368,0L10.368,0z M10.368,82.875 h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0c0,5.702-4.664,10.367-10.367,10.367H10.368C4.666,103.609,0,98.944,0,93.242l0,0 C0,87.54,4.666,82.875,10.368,82.875L10.368,82.875z M10.368,41.438h102.144c5.703,0,10.367,4.665,10.367,10.367l0,0 c0,5.702-4.664,10.368-10.367,10.368H10.368C4.666,62.173,0,57.507,0,51.805l0,0C0,46.103,4.666,41.438,10.368,41.438 L10.368,41.438z"
            />
          </svg>
        </button>
      </div>
    </nav>
  )
}