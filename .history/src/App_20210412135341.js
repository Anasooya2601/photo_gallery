import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

import Modal from './comps/Modal';
import socialMediaAuth from './comps/service/auth';

function App() {
  const handleOnClick=async(provider)=>{
const res=await socialMediaAuth(provider);
console.log(res);
  }
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <div className="App">
 <button onClick={()=>handleOnClick(googleProvider)}>Google</button>
   <Title/>
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}

  
        </div>
  );
}

export default App;
