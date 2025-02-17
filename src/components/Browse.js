
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* MainContainer
       - Video BAckground
       - VideTitle
      secondaryContainer
       - Movie list * n
       - card * n */}
    </div>
  )
}

export default Browse