import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
import initializeAuthentaction from "../Login/Firebase/firebase.init";

initializeAuthentaction()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider);
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
    }, [auth])

    const logOut = () => {
        signOut(auth)
            .then(() => { });
    }

    return {
        user,
        logOut,
        signInUsingGoogle
    }
}
export default useFirebase;