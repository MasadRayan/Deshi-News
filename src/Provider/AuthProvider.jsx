import React, { useEffect, useState } from 'react';
import { AuthContext } from './Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    // console.log(user);
    const [loading, setLoading] = useState(true);

    const createUser =(email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const removeUser =() => {
        setLoading(true);
        return signOut(auth);
    }

    const profileUpdate = (updatedUser) => {
        return updateProfile(auth.currentUser, updatedUser);
    }

    const passwordReset = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    useEffect (()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        removeUser,
        signInUser,
        loading,
        setLoading,
        passwordReset,
        profileUpdate
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;