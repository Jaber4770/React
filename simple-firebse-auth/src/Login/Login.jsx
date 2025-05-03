import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('clicked');
        signInWithPopup(auth, provider)
            .then(result => {
                setUser(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => { setUser(null) })
            .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <div className='border-1 my-5 px-5 py-2 mx-auto container flex items-center justify-center flex-col gap-10'>
                <h1>Login</h1>
                {
                    user ? <button onClick={() => handleSignOut()} className='btn btn-primary px-10'>Sign Out</button>
                        :
                        <button onClick={() => handleGoogleSignIn()} className='btn btn-primary px-10'>Login with google</button>
                }

            </div>
            {
                user &&
                <div>
                    <h1>{user.displayName}</h1>
                    <h2>{user.email}</h2>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;