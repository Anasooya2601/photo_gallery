import {useState,useEffect} from 'react';
import {projectFirestore} from '../firebase/config';
const useFirestore=(collection)=>{
  const[docs,setDocs]=useState([]);
  useEffect(()=>{
  projectFirestore.collection(collection)
  .onSnapshot((snap)=>{
    let document=[];
    snap.forEach()
  })
  
},[collection])
  return{docs};
}