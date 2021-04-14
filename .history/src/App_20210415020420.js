import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

import Modal from './comps/Modal';

// import GoogleLogin from 'react-google-login';
function App() {

  const [selectedImg,setSelectedImg]=useState(null);
  return (
   
    <div className="App">
   <h1>Firebase login</h1>
      
   <Title />
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}


        </div>
       
  );
}

export default App;
