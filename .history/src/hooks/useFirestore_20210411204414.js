import {useState,useEffect} from 'react';
import {projectFirestore} from '../firebase/config';
const useFirestore=(collection)=>{
  const[docs,setDocs]=useState([]);
  useEffect(()=>{
    const unsub=projectFirestore.collection(collection)
  projectFirestore.collection(collection)
  .orderBy('createdAt','desc')
  .onSnapshot((snap)=>{
    let document=[];
    snap.forEach(doc=>{
      documents.push({...doc.data(),id:doc.id})
    });
    setDocs(documents);
  })
  return()=>unsub();
  
},[collection])
  return{docs};
}