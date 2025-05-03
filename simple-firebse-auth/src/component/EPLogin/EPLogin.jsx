import {  getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const EmailPassLogin = () => {
    const [errMsg, setErrMsg] = useState('');
    const [errCode, setErrCode] = useState('');
    const [user, setUser] = useState(null);
    const [success, setSuccess] = useState(false);
    const [showPass, setShowPass] = useState(false);
    const emailRef = useRef();


    const PassRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?#&])[A-Za-z\d@$!%*?#&]{8,}$/;
    const hasSmallLetter = /[a-z]/;
    const hasCapitalLetter = /[A-Z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[@$!%*?#&]/;
    const hasMinLength = /^.{8,}$/;



    const auth = getAuth();

    const handleLogin = (e) => {
        setErrCode('');
        setErrMsg('');
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        /* 
                if (PassRegex.test(password) === false) {
                    setErrMsg("pass should be strong.")
                    return
                } */
        const validSmallLetter = hasSmallLetter.test(password);
        const validCapitalLetter = hasCapitalLetter.test(password);
        const validNumber = hasNumber.test(password);
        const validSpecialChar = hasSpecialChar.test(password);
        const validMinLength = hasMinLength.test(password);

        if (!validSmallLetter) {
            setErrMsg('Need at least one small letter');
        }
        if (!validCapitalLetter) {
            setErrMsg('Need at least one capital letter');
        }
        if (!validNumber) {
            setErrMsg('Need at least one number');
        }
        if (!validSpecialChar) {
            setErrMsg('Need at least one speacial character');
        }
        if (!validMinLength) {
            setErrMsg('Need at least 8 minimum length');
        }


        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                setUser(userCredential);
                console.log(userCredential);
                setSuccess(true);

            })
            .catch(error => {
                const msg = error.message;
                const code = error.code;
                setErrMsg(msg);
                setErrCode(code);
                setSuccess(false);

            });
    };
    const restPassword = () => {
        const email = emailRef.current.value;
        // console.log(emailRef);
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Password reset email has been sent.");
        })
    }

    return (
        <form className='border-1 border-white p-5 mx-5' onSubmit={handleLogin}>
            <div>
                <h1>User Email: {user?.email}</h1>
            </div>
            <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                </svg>
                <input type="email" name='email' ref={emailRef} placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">Enter valid email address</div> <br />

            <label className="input validator">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                        <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                        <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
                    </g>
                </svg>
                <div className='relative'>
                    <input
                        type={showPass ? "password" : ''}
                        name='password'
                        required
                        placeholder="Password"
                    // minLength="8"
                    // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    // title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"

                    />
                    <button className='absolute -right-26 top-1 ' onClick={() => setShowPass(!showPass)}>{showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                </div>
            </label>
            <p className="validator-hint hidden">
                Must be more than 8 characters, including
                <br />At least one number <br />At least one lowercase letter <br />At least one uppercase letter
            </p> <br />
            <br />
            <input type="submit" className='btn px-5 py-1 my-5' value="Submit" />
            <div className='underline cursor-pointer'>
                <a onClick={restPassword}>forgot password</a>
            </div>
            <div>
                {errMsg ? <p className='text-red-500 text-center'>{errMsg}</p> : ""}
                {errCode ? <p className='text-red-500 text-center'>{errCode}</p> : ""}
                {
                    success && <p className='text-center text-green-500'>Sign Up successfully.</p>
                }
            </div>
        </form>
    );
};

export default EmailPassLogin;
