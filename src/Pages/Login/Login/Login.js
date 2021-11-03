import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from '../Firebase/firebase.init'
import './Login.css'
import { Button } from 'react-bootstrap';


initializeAuthentication();


const googleProvider = new GoogleAuthProvider();

const Login = () => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState('');
    // const [isLogin, setIsLogin] = useState(false);

    const auth = getAuth();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                // console.log(user);
            })
    }



    // const setUserName = () => {
    //     updateProfile(auth.currentUser, { displayName: name })
    //         .then(result => { })
    // }

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                // console.log(result);
            })
    }

   
    return (
        <div>
            
            <Button className='google' onClick={handleGoogleSignIn}><i class="fab fa-google"></i>Google Sign In</Button>
        </div>
    );
};

export default Login;