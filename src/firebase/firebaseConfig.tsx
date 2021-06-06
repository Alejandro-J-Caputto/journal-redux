import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB_engFCjOUhEM_Z1UgwaiPvSYuyNypCnE",
  authDomain: "react-app-crud-9b06e.firebaseapp.com",
  projectId: "react-app-crud-9b06e",
  storageBucket: "react-app-crud-9b06e.appspot.com",
  messagingSenderId: "495141136700",
  appId: "1:495141136700:web:7398488ef8f984f8cfd639"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db, 
  googleAuthProvider,
  firebase
}