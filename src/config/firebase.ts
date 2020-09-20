import firebase, { ServiceAccount } from 'firebase-admin';
import credentials from './firebase.credentials.json';
import serviceAccount from './mandecoisas-firebase-adminsdk-3l5j3-7a1f6db32d.json';

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount as ServiceAccount),
  storageBucket: credentials.storageBucket,
  databaseURL: credentials.databaseURL
});

const storage = firebase.storage();

const realtime = firebase.database();
const firestore = firebase.firestore();

export { storage, firebase, realtime, firestore, credentials };
