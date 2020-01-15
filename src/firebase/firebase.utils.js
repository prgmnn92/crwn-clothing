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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc("users/" + userAuth.uid);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
