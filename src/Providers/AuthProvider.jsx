import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types'; // ES6
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import toast from "react-hot-toast";


export const AuthContext = createContext(null);

const auth = getAuth(app)

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

export default function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [wishlist, setWishlist] = useState([]);
    const [order, setOrder] = useState([]);
    const [yourOrders, setYourOrders] = useState([]);
    const [newUser, setNewUser] = useState(null);

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

    const googleSignInWithPopup = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                toast.success('Sign In Successfully')
                console.log(token);
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...

                console.log("errorCode", errorCode);
                console.log("errorMessage ", errorMessage);
                console.log(email);
                console.log(credential);
            });
    }

    const githubSignInWithPopup = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                // This gives you a GitHub Access Token. You can use it to access the GitHub API.
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;

                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                toast.success('Sign In Successfully')
                console.log(token);
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
                toast.error('Something went wrong')
                console.log("errorCode", errorCode);
                console.log("errorMessage ", errorMessage);
                console.log(email);
                console.log(credential);
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
    }, [user,newUser])


    const authInfo = {auth, user, newUser, setNewUser, createUser, signInUser, handleSignOut, loading, googleSignInWithPopup, githubSignInWithPopup, setWishlist, wishlist, order, setOrder, yourOrders, setYourOrders }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


}

AuthProvider.propTypes = {
    children: PropTypes.node,
}