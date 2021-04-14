import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCypl3y8uOX28lEoZBNqjdk9dLf3S3-S5Y",
  authDomain: "photogallery-20475.firebaseapp.com",
  databaseURL: "https://photogallery-20475-default-rtdb.firebaseio.com",
  projectId: "photogallery-20475",
  storageBucket: "photogallery-20475.appspot.com",
  messagingSenderId: "721011186283",
  appId: "1:721011186283:web:8d2de4d66f4eee2df26f2e",
  measurementId: "G-618HP9YJY3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
 
  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  //initial 
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export { projectStorage, projectFirestore, timestamp};