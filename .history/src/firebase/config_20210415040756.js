import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';




  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCSRCS8xStodX_fqZwiq8uhMIvQhQ4o8gQ",
    authDomain: "picsgram-e80df.firebaseapp.com",
    projectId: "picsgram-e80df",
    storageBucket: "picsgram-e80df.appspot.com",
    messagingSenderId: "73497365453",
    appId: "1:73497365453:web:3bc43df5e9a4f7b2ef9284",
    measurementId: "G-L1YC3DTSJE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
 
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  //initial 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFirestore, timestamp};