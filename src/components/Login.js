import React, { useState, useRef } from 'react'
import Header from './Header';
import {checkValidData} from '../utils/Validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/Firebase';
// import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true);
  const [errorMessage, setErrorMessage]=useState(null);
  // const navigate= useNavigate();
  const dispatch=useDispatch();

  const name1=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

const handleButtonClick = () =>{
    // Validate the form data
    //checkValidData(email,password);

    console.log(name1.current.value);
    console.log(email.current.value);
    console.log(password.current.value);

     const message=checkValidData(name1.current.value, email.current.value, password.current.value);
     //console.log(message);
     setErrorMessage(message);

     if(message) return;

     //Sign In / Sign Up
     if(!isSignInForm){
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
         // Signed up 
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
          updateProfile(auth.currentUser, {
            displayName: name1.current.value, photoURL:USER_AVATAR,
          }).then(() => {
            const {uid, email, displayName, photoURL} = auth.currentUser;
                          dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL:photoURL,}));
              //console.log(user);


              // navigate("/browse");
          }).catch((error) => {
            // An error occurred
            setErrorMessage(error.message);
          });
            })
          .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMessage(errorCode + " " +errorMessage)
    // ..
  });

     }else{
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
    
              const user = userCredential.user;
              // console.log(user);
              // navigate("/browse");
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + " " +errorMessage)

          });
     }
  }

  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
    <Header />
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg" alt="background" />
    </div>
    <form onSubmit={(e)=> e.preventDefault()} className="bg-black text-white p-12 w-3/12 absolute mx-auto right-0 left-0 my-36 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-5">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {/* {
          !isSignInForm && (         */}
            <input ref={name1} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
          {/* )
        } */}
        <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
        <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button className='p-4 my-5 w-full bg-red-700 rounded-lg' onClick={handleButtonClick}>{
          isSignInForm ? "Sign In" : "Sign Up"
        }</button>
        <p className='py-4 cursor-pointer' onClick={toggleSignForm}>
          {isSignInForm ? "New to Netflix? Sign Up now." : "Already registered? Sign In"}
        </p>
    </form>
    </div>
  )
}

export default Login