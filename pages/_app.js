import '../styles/globals.css'
import SideMenu from "../components/partials/header/SideMenu";
import CookieWindow from "../components/general/CookieWindow";


function MyApp({Component, pageProps}) {

  return (
    <>
      <Component {...pageProps} />
      <SideMenu page={''}/>
      <CookieWindow/>
    </>
  );
}

export default MyApp
