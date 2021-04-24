import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import UserProvider from "./comps/UserProvider";
import Login from "./comps/Login";
import Modal from './comps/Modal';


function App() {
  
  const [selectedImg,setSelectedImg]=useState(null);
  return (
    <UserProvider>
         <Router>
         <Navbar/>
    <div className="App">
    <Switch>
    <Route exact path="/">
            <Login />
          </Route>
   <Route path="./comps/Title"/>
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}

   </Switch>
        </div>
        </Router>
        </UserProvider>
  );
}

export default App;
