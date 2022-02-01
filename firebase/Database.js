import {app} from './Firebase';
import {getDatabase, set, ref, push} from 'firebase/database';

const database = getDatabase(app, 'https://noah-gels-website-default-rtdb.europe-west1.firebasedatabase.app');

export function addRequest(email, content) {
  push(ref(database, 'requests'), {
    email,
    content,
  });
}