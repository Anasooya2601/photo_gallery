import React from 'react';
import useStorage from '../hooks/useStorage';
const ProgressBar=({file,setFile})=>{
    const{url,progress}=useStorage(file);
    console.log(progress,url)

const ProgressBar=()=>{
    return(
        <div className="progress-bar">progress</div>
    )
}
export default ProgressBar;