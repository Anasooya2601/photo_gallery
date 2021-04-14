import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import FirebaseUser from './firebaseUser';
import Modal from './comps/Modal';

// import GoogleLogin from 'react-google-login';
function App() {
  const [ signInOrUp, setSignInOrUp ] = useState( '' );
  const [selectedImg,setSelectedImg]=useState(null);
  return (
   
    <div className="App">
   <h1>Firebase login</h1>
      {
        signInOrUp ? (
          <FirebaseUser action={ signInOrUp } />
        ) : (
          <>
            <button type="button" onClick={ () => setSignInOrUp( 'signin' ) } >Log in with existing user</button>
            <button type="button" onClick={ () => setSignInOrUp( 'signup' ) } >Create a new user</button>
          </>
        )
      }
   <Title />
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}


        </div>
       
  );
}

export default App;
