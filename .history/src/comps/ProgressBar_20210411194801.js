import React from 'react';
import useStorage from '../hooks/useStorage';
const Progressbar=({file,setFile})=>{
    const{url,progress}=useStorage(file);
}
const ProgressBar=()=>{
    return(
        <div className="progress-bar">progress</div>
    )
}
export default ProgressBar;