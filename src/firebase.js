import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDO1c0zABOZB5QMzWvKE6P9jidJn8b1QbU",
  authDomain: "whatsapp-clone-c708d.firebaseapp.com",
  projectId: "whatsapp-clone-c708d",
  storageBucket: "whatsapp-clone-c708d.appspot.com",
  messagingSenderId: "720353709508",
  appId: "1:720353709508:web:c85229297e2224b8556891",
  measurementId: "G-B02X89QM8B",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
