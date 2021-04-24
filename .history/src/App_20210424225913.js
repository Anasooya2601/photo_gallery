import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import { GlobalStyles, lightTheme, darkTheme } from "./comps/globalStyles";
import Modal from './comps/Modal';
import {ThemeProvider} from "styled-components";
import  {DarkMode} from "./comps/DarkMode";
import Toggle from "./comps/Toggle"
// import GoogleLogin from 'react-google-login';
function App() {
  const [theme, toggleTheme, mountedComponent] = DarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <ThemeProvider theme={themeMode}>
     <GlobalStyles/>
    <div className="App">
   
      
   <div className="app__header">
   <Toggle theme={theme} toggleTheme={toggleTheme}>
      <Title />
  </div>
  <h2>Upload your pic</h2>
  


</Toggle>
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}


        </div>
        </ThemeProvider> 
  );
}

export default App;
