import firebase from "../firebase/config";
import React from 'react';
const socialMediaAuth=(provider)=>{
    return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res)=>{
        return res.user;
    })
    .catch((er)=>{
        return er;   
     });
};
export default socialMediaAuth;