
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import lang from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const user= useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

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

    
    const handleGptSearchClick = () =>{
      // Toggle GPT Search
      dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) =>{
      //console.log(e.target.value);
      dispatch(changeLanguage(e.target.value));
    }

  return (
    <div className='fixed z-10 px-32 w-full bg-gradient-to-t from-transparent to-black flex justify-between items-center py-4'>
        <img className='w-44' src={LOGO} alt="logo"/>

      { user && (
        <div className='flex gap-3 items-center'>
        {showGptSearch && <select  className="p-2 m-2 bg-gray-900 text-white"  onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((lang)=>(<option key={lang.identifier} value={lang.identifier}> {lang.name} </option>))}
         
        </select>}
        <button className="py-2 px-4 m-2 bg-purple-600 text-white rounded-xl" onClick={handleGptSearchClick}>
          {showGptSearch ? "Homepage" : "GPT Search"}
        </button>
          <img className='w-10 h-10' src={user?.photoURL} alt="usericon"/>
          <button onClick={handleClickSignOut} className="text-white font-bold font-kfom">Signout</button>
        </div>
      )}
       
    </div>
  )
}

export default Header;