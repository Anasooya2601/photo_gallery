import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

import Modal from './comps/Modal';
import GoogleBtn from './comps/Google';

function App() {
  
  const [selectedImg,setSelectedImg]=useState(null);
  return (
   
    <div className="App">
    
    <GoogleBtn/>
   <Title />
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}


        </div>
       
  );
}

export default App;
