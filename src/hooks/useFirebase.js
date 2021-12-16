import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
        });
        return () => unsubscribed;
    }, [auth])

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;