import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase-init';

initializeAuthentication()


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //Google sing in
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message)
            })
    }
    //Github singIn 
    const signInUsingGithub = () => {
        return signInWithPopup(auth, githubProvider)
            .catch(error => {
                setError(error.message)
            })
    }

    //LogOut
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }



    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])
    return (
        { error, user, signInUsingGoogle, signInUsingGithub, logOut }
    );
};

export default useFirebase;