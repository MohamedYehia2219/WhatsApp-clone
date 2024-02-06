// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//npm i firebase
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhhnoeHpf74LHVZTOxP3m_6Mfja-e_kd0",
    authDomain: "whats-app-clone-605a2.firebaseapp.com",
    projectId: "whats-app-clone-605a2",
    storageBucket: "whats-app-clone-605a2.appspot.com",
    messagingSenderId: "580781357102",
    appId: "1:580781357102:web:217fda4bc6a8e41f0347bf",
    measurementId: "G-LR00QENZZT"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();
  
  export{auth,provider};
  export default db;