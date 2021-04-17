import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCZc7JU-XzDD9GVAXEoxF3NUY42jSftHY4",
  authDomain: "picgram01-5140d.firebaseapp.com",
  projectId: "picgram01-5140d",
  storageBucket: "picgram01-5140d.appspot.com",
  messagingSenderId: "824556583774",
  appId: "1:824556583774:web:4f1787347f9a4730422dcf",
  measurementId: "G-G29C4G8VR4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
 
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  //initial 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFirestore, timestamp};