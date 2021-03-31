import './ListeDossiers.scss';
// import dossTab from '../data/liste-dossiers.json';
import Dossier from './Dossier';
import { useEffect, useState } from 'react';
import dbFirestore from '../data/firebase';

<<<<<<< HEAD
export default function ListeDossiers() {
  // État des dossiers de signets
  const [dossiers, setDossiers] = useState([]);

  // Étape C : Exécuter une requête sur la collection 'dossiers-temp' pour lire l'info des dossiers disponibles
  // Comme le code suivant fait appel à une ressource externe, il est ASYNCHRONE
  // donc, il n'y a pas de garantie que le tableau dossiers soit remplit avant l'affichage du composant
  useEffect(
    () => dbFirestore.collection('dossiers-temp').get().then(
            reponse => {
              let dossiersTemp = [];
              reponse.forEach(doc => dossiersTemp.push({id: doc.id, ...doc.data()}));
              setDossiers(dossiersTemp);
            }
          )
    , []
  );
=======
const firebaseConfig = {
  apiKey: "AIzaSyAZK-S_nidq0I8AdTnT2_duj7GXE0txxCo",
  authDomain: "iwra-react-f1315.firebaseapp.com",
  projectId: "iwra-react-f1315",
  storageBucket: "iwra-react-f1315.appspot.com",
  messagingSenderId: "93876236827",
  appId: "1:93876236827:web:71f57fb14579e0b4f0bebe"
};
>>>>>>> 68f49ac198bb822dd0a97282222a852cc05a5cc0

  return (
    <ul className="ListeDossiers">
      {
        dossiers.map( 
          dossier =>  <li key={dossier.id}><Dossier {...dossier} /></li>
        )
      }
    </ul>
  );
}