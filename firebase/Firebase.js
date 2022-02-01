import {initializeApp} from 'firebase/app';
import {getAnalytics, isSupported} from 'firebase/analytics';
import {logEvent as logEventToFirebase, setAnalyticsCollectionEnabled} from 'firebase/analytics';
import {getCookie} from "cookies-next";

const app = initializeApp({
  apiKey: "AIzaSyCULQ8R-UXuhGO4HF9cT9PzMlgAmeP52Ts",
  authDomain: "noah-gels-website.firebaseapp.com",
  projectId: "noah-gels-website",
  storageBucket: "noah-gels-website.appspot.com",
  messagingSenderId: "339076105765",
  appId: "1:339076105765:web:78615e623de896397c61cc",
  measurementId: "G-23WV3LPPZH",
});

let analytics = null

export async function initAnalytics() {
  if (await isSupported()) {
    analytics = getAnalytics(app);
    setAnalyticsCollectionEnabled(analytics, getCookie('analytics_accepted') === 'accepted');
  } else {
    analytics = {notSupported: true};
  }
}

const logEvent = async (eventName, eventParams) => {
  if (!getCookie('defined_cookies')) return;
  if (!analytics) {
    await initAnalytics();
  }
  if (analytics.notSupported) return;
  logEventToFirebase(analytics, eventName, eventParams);
}

export {analytics, logEvent, app};