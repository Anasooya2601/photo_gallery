import React,{useState} from 'react';
import ImageGrid from './comps/ImageGrid';
import Title from './comps/Title';
import UploadForm from './comps/UploadForm';
import FirebaseUser from './FirebaseUser';
import Modal from './comps/Modal';

// import GoogleLogin from 'react-google-login';
function App() {
  const [ signInOrUp, setSignInOrUp ] = useState( '' );
  const [selectedImg,setSelectedImg]=useState(null);
  return (
   
    <div className="App">
      {/* <h1>welcome{name}</h1>
      <h1>email{email}</h1>
  <img src={url} alt={name}/>

,  <GoogleLogin
    clientId="721011186283-j80g8cnf2liket03b8dmd1oclt9lkuin.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />,
    */}
   <Title />
   <UploadForm/>
   <ImageGrid setSelectedImg={setSelectedImg}/>
   {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}


        </div>
       
  );
}

export default App;