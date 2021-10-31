import React, { useState, useEffect } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase-init';

initializeAuthentication()


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true)

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    //Google sing in
    const signInUsingGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                setError(error.message)
            })
            .finally(() => { setIsLoading(false) })
    }
    //Github singIn 
    const signInUsingGithub = () => {
        setIsLoading(true)
        return signInWithPopup(auth, githubProvider)
            .catch(error => {
                setError(error.message)
            })
            .finally(() => { setIsLoading(false) })
    }

    //LogOut
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => { setIsLoading(false) })
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe
    }, [])
    return (
        { error, user, signInUsingGoogle, signInUsingGithub, logOut, isLoading }
    );
};

export default useFirebase;