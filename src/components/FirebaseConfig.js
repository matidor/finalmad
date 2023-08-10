import firebase from 'firebase/compat/app';  
import 'firebase/compat/database';  

const firebaseConfig = {
  apiKey: "AIzaSyC-81tqkF8YEG9sOCuJiJZ0mdU8i_WMGXA",
  authDomain: "mardarqui.firebaseapp.com",
  projectId: "mardarqui",
  storageBucket: "mardarqui.appspot.com",
  messagingSenderId: "1052601479218",
  appId: "1:1052601479218:web:6d354bc0b805c8f61a4c2b"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

export default database;