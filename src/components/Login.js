import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm]=useState(true);

  const toggleSignForm = () =>{
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
    <Header />
    <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/638e9299-0637-42d1-ba39-54ade4cf2bf6/web/IN-en-20250203-TRIFECTA-perspective_46eb8857-face-4ea6-b901-dbf22b461369_medium.jpg" alt="background" />
    </div>
    <form className="bg-black text-white p-12 w-3/12 absolute mx-auto right-0 left-0 my-36 bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-5">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {
          !isSignInForm && (        
            <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
          )
        }
        <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
        <input type="password" placeholder='Password' className='p-4 my-4 w-full bg-gray-600 rounded-lg' />
        <button className='p-4 my-5 w-full bg-red-700 rounded-lg'>{
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