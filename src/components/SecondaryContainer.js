
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movies=useSelector((store) => store.movies);

  return (
    <div className="bg-black">
    <div className="-mt-52 relative z-20">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
    {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies} /> */}
    <MovieList title={"Popular"} movies={movies.popularMovies} />
    <MovieList title={"Top Rated Movies"} movies={movies.topRatedMovies} />
    <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
</div>
      {/* MovieList - Popular
        - MovieCard * n
        MovieList - Now Playing
        MovieList - Trending
        MovieList - Horror */}
    </div>
  )
}

export default SecondaryContainer