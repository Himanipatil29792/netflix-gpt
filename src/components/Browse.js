
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from '../components/GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <>
      <Header />
      {
        showGptSearch ?  <GptSearch /> :<>
        <MainContainer />
        <SecondaryContainer />
        </> 
      }
     
      
      {/* MainContainer
       - Video BAckground
       - VideTitle
      secondaryContainer
       - Movie list * n
       - card * n */}
    </>
  )
}

export default Browse