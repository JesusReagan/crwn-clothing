import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAhilPlYfkixbB5bopmmhpWbn9n7p8Sf3U",
  authDomain: "crwn-db-6abd7.firebaseapp.com",
  databaseURL: "https://crwn-db-6abd7.firebaseio.com",
  projectId: "crwn-db-6abd7",
  storageBucket: "crwn-db-6abd7.appspot.com",
  messagingSenderId: "613207537294",
  appId: "1:613207537294:web:702f4ce97b1f73367a7bdf",
  measurementId: "G-JGHTMHZNZ1"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
