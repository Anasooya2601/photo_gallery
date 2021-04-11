import React from 'react';

const Modal=({selectedImg,setSelectedImg})=>{
    const handleClick=(e)=>{
        setSelectedImg(null);
    }
    return(
<div className="backdrop" onClick={handleClick}>
    <img src={selectedImg} alt="enlarged image"/>
</div>
    )
    
}
export default Modal;