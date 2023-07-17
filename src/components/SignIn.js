import React, {useRef} from 'react'
import "./SignIn.css"
import {auth} from "../firebase"



let userId;
auth.onAuthStateChanged((user) => {
  if (user) { 
    userId = user.uid 
}
});

const SignIn = () => { 
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = e => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(userCredential =>{
            console.log(userCredential)
        }).catch(err =>{
            console.log(err)
        })

    }
    const signIn = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(userCredential =>{
            console.log(userCredential)
        }).catch(err =>{
            console.log(err)
        })

    }
    return (
        <div className='signin'> 
            <form action=''>
                <h1>Welcome to Melts! </h1>
                <input ref={emailRef} type="email" id="myInput"/>
                <input ref={passwordRef} type="password" />
                <button onClick={signIn}>Sign in </button>
                <h3>Not yet register? Fill in your details above & click </h3>
                <button onClick={signUp}> Sign up</button>
                {/* <h3>Not yet register? Fill in your details above & click <span 
                onClick={signUp}
                className='signin__link'>Sign up</span></h3> */}
            </form>
        </div>
    )
}
export { userId };
export default SignIn;