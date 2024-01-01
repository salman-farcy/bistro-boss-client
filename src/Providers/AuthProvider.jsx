import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";


export const AuthContext = createContext(null)


const AuthProvider = ({ children }) => {
     const [user, setUsser] = useState(null);
     const [loading, setLoading] = useState(true);
     const provider = new GoogleAuthProvider();

     //* UserCreate
     const createUser = (email, password) => {
          setLoading(true);
          return createUserWithEmailAndPassword(auth, email, password)
     }

     //* SigIn
     const signIn = (email, password) => {
          setLoading(true);
          return signInWithEmailAndPassword(auth, email, password)
     }

     //* LogOut
     const logOut = () => {
          setLoading(true)
          return signOut(auth);
     }

     //* Google Login
     const googleSignIn = () => {
          setLoading(true)
          return signInWithPopup(auth, provider)
     }

     //* Update User
     const updateUserProflie = (name, photo) => {
          updateProfile(auth.currentUser, {
               displayName: name, photoURL: photo
          })
     }


     //* Observer
     useEffect(() => {
          const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
               setUsser(currentUser);
               setLoading(false);
          })
          return () => {
               return unSubscribe();
          }
     }, [])

     const authInfo = {
          user,
          loading,
          createUser,
          signIn,
          logOut,
          updateUserProflie,
          googleSignIn,
     }

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;