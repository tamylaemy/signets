import './ListeDossiers.scss';
import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAZK-S_nidq0I8AdTnT2_duj7GXE0txxCo",
  authDomain: "iwra-react-f1315.firebaseapp.com",
  projectId: "iwra-react-f1315",
  storageBucket: "iwra-react-f1315.appspot.com",
  messagingSenderId: "93876236827",
  appId: "1:93876236827:web:71f57fb14579e0b4f0bebe"
};

export default function ListeDossiers() {
  return (
    <ul className="ListeDossiers">
      {
        dossTab.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}