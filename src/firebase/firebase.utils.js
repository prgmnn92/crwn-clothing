import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAJK1pwsP9cNzoisXkTsdrm3dY1FOdsySs",
  authDomain: "crwn-db-96d35.firebaseapp.com",
  databaseURL: "https://crwn-db-96d35.firebaseio.com",
  projectId: "crwn-db-96d35",
  storageBucket: "crwn-db-96d35.appspot.com",
  messagingSenderId: "406956754875",
  appId: "1:406956754875:web:92f78c2c25ed1507fae69e",
  measurementId: "G-EMHENV121W"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
