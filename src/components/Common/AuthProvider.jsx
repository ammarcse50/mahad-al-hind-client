import { createContext, useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);

export const AuthContext = createContext(null);
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();
  // Register account

  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //Sign In
  const loginAccount = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, provider)
      
  };

  //Sign Out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

    const updateUserProfile =()=>{
         updateProfile(auth.currentUser , {
    displayName: user?.displayName , photoURL: user?.photoURL
  })
    }
      
   

  // observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current value of the current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createAccount,
    updateUserProfile,
    loginAccount,
    logOut,
      googleLogin,
    loading,
    setLoading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
