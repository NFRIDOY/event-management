import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'; // ES6
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";


export const AuthContext = createContext(null);

const auth = getAuth(app)

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignOut = () => {
        setLoading(true)
        return signOut(auth).then(() => {
            // Sign-out successful.
            // alert('Sign-out successful')
            toast.success('Sign Out Successfully')
        }).catch((error) => {
            // An error happened.
            console.log(error);
        });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("Current User: ", currentUser);
            setLoading(false)
        })

        return () => {
            unSubscribe();
        }
    }, [])



    const authInfo = { user, createUser, signInUser, handleSignOut, loading }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


}

AuthProvider.propTypes = {
    children: PropTypes.node,
}