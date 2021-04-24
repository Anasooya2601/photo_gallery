import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';

import Modal from './comps/Modal';
import {ThemeProvider} from "styled-components";
import  {DarkMode} from "./DarkMode";
// import GoogleLogin from 'react-google-login';
function App() {

  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <ThemeProvider theme={themeMode}>
     <GlobalStyles/>
    <div className="App">
   
      
   <div className="app__header">
      <Title />
  </div>
  <h2>Upload your pic</h2>
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}


        </div>
        </ThemeProvider> 
  );
}

export default App;
