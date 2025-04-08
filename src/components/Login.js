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

  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  const fullname=useRef(null);
  const email=useRef(null);
  const password=useRef(null);

const handleButtonClick = () =>{
    // Validate the form data
    //checkValidData(email,password);

    //console.log(fullname.current.value);
    //console.log(email.current.value);
    //console.log(password.current.value);

     const message=checkValidData(email.current.value, 
      password.current.value, 
      !isSignInForm ? fullname.current.value : undefined // Only pass fullname in Sign-up mode
     );
     //console.log(message);
     setErrorMessage(message !== true ? message : null);

     if(message) 

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
            displayName: fullname.current.value, photoURL:USER_AVATAR,
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

  return (
    <div className='relative w-full h-screen'>
    <Header />
    <div className="absolute inset-0">
        <img className='w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg" alt="background" />
         {/* Black Overlay */}
         <div className="absolute inset-0 bg-black bg-opacity-100 md:opacity-60 "></div>
    </div>
    <form onSubmit={(e)=> e.preventDefault()} className="absolute p-8 bg-opacity-80 bg-black w-full max-w-md left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-10">
      
        <h2 className="text-3xl  text-white mb-6 space-x-4 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h2>
        {!isSignInForm && (        
            <input ref={fullname} type="text" placeholder='Full Name' className='py-2 px-4 mb-5 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white' />
        
        )} 
       
        <input ref={email} type="text" placeholder='Email Address' className='py-2 px-4 mb-5 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white' />
        <input ref={password} type="password" placeholder='Password' className='py-2 px-4 mb-5 w-full bg-gray-800 bg-opacity-50 text-white placeholder-gray-300 border border-gray-500 rounded focus:outline-none focus:ring-1 focus:ring-white' />
        <p className="text-red-700 font-bold">{errorMessage}</p>
        <button className='py-2 px-4 mb-4 w-full bg-red-600  text-white rounded text-lg active:scale-95 transition' onClick={handleButtonClick}>{
          isSignInForm ? "Sign In" : "Sign Up"
        }</button>
        <p className='text-gray-300 font-kfom cursor-pointer' onClick={toggleSignForm}>
          {isSignInForm ?   <>
              New to Netflix <span className="text-white font-bold">Sign up now.</span>
            </> :
            <>
              Already have an account?{" "}
              <span className="text-white font-bold">Sign In now.</span>
            </>}
        </p>
    </form>
    </div>
  )
}

export default Login