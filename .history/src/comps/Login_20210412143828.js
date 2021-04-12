
import React, { useContext } from 'react';

import { signInWithGoogle } from '../firebase/config';
import { UserContext } from '../UserProvider';
import { Redirect } from 'react-router-dom';
export default function Login() {
    const user = useContext(UserContext)
    const [redirect, setredirect] = useState(null)
  
    useEffect(() => {
      if (user) {
        setredirect('/dashboard')
      }
    }, [user])
    if (redirect) {
      <Redirect to={redirect}/>
    }
    return (
        <div className="login-buttons">
          <button className="login-provider-button" onClick={signInWithGoogle}>
          <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt="google icon"/>
          <span> Continue with Google</span>
         </button>
        </div>
    );
  }

