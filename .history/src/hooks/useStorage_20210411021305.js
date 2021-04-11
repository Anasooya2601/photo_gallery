import {useState,useEffect} from 'react';
import {projectStorage} from '../firebase/config';

const userStorage=(file)=>{
    const [progress,setProgress]=useState(0);
    const[error,setError]=useState(null);
    const[url,setUrl]=useState(null);
    useEffect(()=>{
        //references
        const storageRef=projectStorage.ref(file.name)

        storageRef.put(file)
    },[file])

}
