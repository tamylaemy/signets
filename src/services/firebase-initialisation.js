import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import * as firebaseui from 'firebaseui';
import firebaseConfig from './config';

 // Étape A : Initialiser Firebase
if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  
  // initialiser firebase auth
  export const instanceFirebaseAuth = firebase.auth()

  // Étape B : Initialiser Firestore
  export const instanceFirestore = firebase.firestore();
  
  // Initialiser FirebaseUI
  export const instanceFirebaseUI = new firebaseui.auth.AuthUI(instanceFirebaseAuth);