import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies copy";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
import useScifiMovies from "../hooks/useScifiMovies ";
import useAnimeMovies from "../hooks/useAnime";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useScifiMovies();
  useAnimeMovies()
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  return (
    <div className="">
      <Header />
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
