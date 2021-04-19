import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';

// objet de configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZK-S_nidq0I8AdTnT2_duj7GXE0txxCo",
    authDomain: "iwra-react-f1315.firebaseapp.com",
    projectId: "iwra-react-f1315",
    storageBucket: "iwra-react-f1315.appspot.com",
    messagingSenderId: "93876236827",
    appId: "1:93876236827:web:71f57fb14579e0b4f0bebe"
  };

 // Étape A : Initialiser Firebase
if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // Étape B : Initialiser Firestore
  const dbFirestore = firebase.firestore();
  
  // Exporter par défaut la référence à Firestore
  export default dbFirestore;

  // Initialiser FirebaseUI
  export const instanceFbUI = new firebaseui.auth.AuthUI(firebase.auth());