import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions';
import {BG_URL} from '../utils/constants';

const GptSearch = () => {
  return (<>
    <div className="absolute -z-10">
        <img className='w-full h-full object-cover' src={BG_URL} alt="background" />
         {/* Black Overlay */}
         <div className="absolute inset-0 bg-black bg-opacity-100 md:opacity-60 "></div>
    </div>
    <div>
    {/* - Gpt Search Bar
    - Gpt Movie Suggestions */}

    <GptSearchBar />
    <GptMovieSuggestions />
    </div>
  </>
    
  )
}

export default GptSearch