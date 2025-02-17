
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user= useSelector((store) => store.user);

  const handleClickSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

    useEffect(()=>{
          const unsubscribe = onAuthStateChanged(auth, (user) => {
              if (user) {
              
                const {uid, email, displayName, photoURL} = user.uid;
                dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL:photoURL}));
                    navigate("/browse");
                    //window.location.href="/browse";
                 } else {
                   // User is signed out
                   dispatch(removeUser());
                  navigate("/");
              }
            });
            //unsubscribe when component unmount
            return () => unsubscribe();
      },[]);

  return (
    <div className='flex justify-between absolute w-full px-8 py-2 from-black bg-gradient-to-b z-10'>
        <img className='w-48' src={LOGO} alt="logo"/>

      { user && (
        <div className='flex p-4'>
          <img className='w-12 h-12' src={user?.photoURL} alt="usericon"/>
          <button onClick={handleClickSignOut} className="ml-3 font-bold text-white">Signout</button>
        </div>
      )}
       
    </div>
  )
}

export default Header;