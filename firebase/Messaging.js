import {getMessaging} from "firebase/messaging";
import {app} from "./Firebase";
import axios from 'axios';

const messaging = getMessaging(app)

export function sendNotification() {
  axios.post('https://fcm.googleapis.com/v1/projects/noah-gels-website/messages:send', {

  }).then();
}