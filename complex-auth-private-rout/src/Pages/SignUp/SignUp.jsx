import React, { use } from 'react';
import { Link,  } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';


const SignUp = () => {

    const { createUser, googleSignIn } = use(AuthContext);
    // const location = useLocation();

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(email, password, name);


        createUser( email, password)
            .then(userCredential => {
                console.log(userCredential);
            })
            .catch(error => {
                console.log(error);
        })
    }
    const handleLoginWithgoogle = () => {
        googleSignIn()
            .then(result => {
                console.log('user login with google done', result);
            })
            .catch(error => {
                console.log(error);
        })
    }

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm mx-auto shrink-0 shadow-2xl">
                        <div className="card-body">
                                <h1 className='text-3xl font-bold text-center'>Sign up Please</h1>
                            <form onSubmit={handleRegister} className="fieldset">
                                <label className="label">Name</label>
                                <input type="text" name='name' className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name='password' className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">sign up</button>
                                <p>Already has an account? <Link to='/login' className='text-blue-500 underline'>Login</Link></p>
                            </form>
                            <button onClick={handleLoginWithgoogle} className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Signup with Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;