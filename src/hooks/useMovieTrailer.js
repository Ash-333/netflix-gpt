import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailer=useSelector(store=>store.movie.trailerVideo)
  const getMovieVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}/videos`;
    const response = await fetch(url, options);
    const data = await response.json();
    const filteredData = data.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : data.results[0];
    dispatch(addTrailerVideo(trailer));
    
  };

  useEffect(() => {
    !trailer && getMovieVideo();
  }, []);
};

export default useMovieTrailer
