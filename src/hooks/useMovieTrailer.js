import { useDispatch } from "react-redux";
import {addTrailerVideo} from "../utils/moviesSlice";
import {API_OPTIONS} from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    //Fetch trainer video && updating the store with trailer video
    const getMovieVideos = async () =>{
      const data=await fetch("https://api.themoviedb.org/3/movie/" +  movieId + "/videos?language=en-US", API_OPTIONS);
      const json=await data.json();
      console.log(json);
  
      const filterTrailer=json.results.filter((video)=>video.type === "Trailer");
      const trailer=filterTrailer.length ? filterTrailer[0] : json.results[0];
      console.log(trailer);
      dispatch(addTrailerVideo(trailer));
    }
  
    useEffect(()=>{
      getMovieVideos();
    },[]);
}

export default useMovieTrailer;