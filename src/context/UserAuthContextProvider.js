import { createContext, useContext, useEffect, useState } from "react";

import { app } from './../config/firebaseConfig';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAuth,
    onAuthStateChanged
}
from 'firebase/auth';


const userAuthContext = createContext();
export const auth = getAuth(app);

export function UserAuthContextProvider({children}) {

    const [user, setUser] = useState("")
    const [loading, setLoading] = useState(true)
    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth,email, password);
    }

    function logIn(email, password) {
        return signInWithEmailAndPassword(auth,email, password);
    } 

    function logOut(){
        signOut(auth);
    }


    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unsub();
        }
   } , [])

    return <userAuthContext.Provider value={{user, signUp, logIn, logOut, loading}}>{children}</userAuthContext.Provider>
}

export function useUserAuth(){
    return useContext(userAuthContext)
}