import firebase from "../firebase/config";
const socialMediaAuth=(provider)=>{
    firebase.auth().signInWithPopup(provider)
}
export default socialMediaAuth;