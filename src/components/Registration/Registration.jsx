// import googleIcon from 'https://fontawesome.com/icons/google?f=brands&s=solid'
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';

import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";


// library.add(fas);

export default function Registration() {
    // const { user, createUser, signInUser, handleSignOut, loading, googleSignInWithPopup } = useContext(AuthContext)
    const {auth, user, createUser, signInUser, handleSignOut, loading, googleSignInWithPopup, githubSignInWithPopup } = useContext(AuthContext)

    const handleEmailPasswords = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const email = e.target.email.value
        const password = e.target.password.value
        const photoURL = e.target.photoURL.value
        console.log(name, email, password);
        createUser(email, password)
            .then((userCredential) => {
                toast.success('Registration Successful')
                // Signed up 
                const user = userCredential.user;
                // ...
                console.log(user);

                // User Name and Photo URL

                updateProfile(auth.currentUser, {
                    displayName: "NFFF", photoURL: "photoURL"
                }).then(() => {
                    // Profile updated!
                    // ...
                    console.log("Profile Updated");
                    toast.success("Profile Updated");
                }).catch((error) => {
                    // An error occurred
                    // ...
                    console.log(error)
                    toast.error(error)
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorCode);
                console.log(errorMessage);
            });
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-100 py-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left hidden lg:block" data-aos="zoom-in-left">
                        <h1 className="text-5xl font-bold">Registration <span className="text-success">Now!</span></h1>
                        <p className="py-6">
                            Our dedicated support team is available to assist you 24/7.
                        </p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100" data-aos="zoom-in-right">
                        <form className="card-body" onSubmit={handleEmailPasswords} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photoURL" placeholder="Photo URL" className="input input-bordered" />
                                {/* <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label> */}
                            </div>
                            <div className="form-control mt-6 ">
                                <button className="btn btn-success text-white" type="submit">Registration</button>
                                {/* <button className="btn btn-success text-white"></button> */}
                                <p className="mx-auto mt-6">
                                    Already Have An Account? <Link to={"/login"} className="text-success">Login</Link>
                                </p>
                            </div>
                            <div className="mt-6 flex justify-evenly">
                                <button className="btn btn-ghost w-fit rounded-full" onClick={googleSignInWithPopup} >
                                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                                </button>
                                <button className="btn btn-ghost w-fit rounded-full" onClick={githubSignInWithPopup}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg>
                                </button>
                                {/* <button><img src={googleIcon} alt="" srcset="" /></button> */}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
