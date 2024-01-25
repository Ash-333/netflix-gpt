import { nowPlayingUrl, options } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/movieSlice'
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies=useSelector(store=>store.movie.nowPlayingMovies)

  const nowPlaying = async () => {
    const response = await fetch(nowPlayingUrl, options);
    const data = await response.json();
    dispatch(addNowPlayingMovies(data.results));
  };

  useEffect(() => {
    !nowPlayingMovies && nowPlaying();
  }, []);
};

export default useNowPlayingMovies