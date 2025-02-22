import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const usePopularMovies = () => {
 //Fetch data from TMDB API & update store
 const dispatch = useDispatch();

 const getPopularMovies = async () =>{
   const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
   const json=await data.json();
   console.log(json.results);
   dispatch(addPopularMovies(json.results));
 }

 useEffect(()=>{
    getPopularMovies();
 },[]);

}

export default usePopularMovies;

