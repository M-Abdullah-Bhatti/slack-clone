// import firebase from 'firebase'

import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyB9ADyurM-h_wU_ukjKmKdxjXn5z6AXubY",
  authDomain: "slack-clone-bfc4a.firebaseapp.com",
  projectId: "slack-clone-bfc4a",
  storageBucket: "slack-clone-bfc4a.appspot.com",
  messagingSenderId: "892673611484",
  appId: "1:892673611484:web:1a7f7adfb8332797b00619",
  measurementId: "G-QMW193BBNG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export {auth, provider};
export default db;
