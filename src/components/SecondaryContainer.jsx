import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movie=useSelector((store)=>store.movie)
  return (
    <div className='bg-black text-white pl-2 md:pl-6'>
      <div className=' mt-0 md:-mt-52 z-20 relative'>
      <MovieList title={"Now Playing"} movies={movie.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies={movie.popularMovies}/>
      <MovieList title={"Top rated"} movies={movie.topRatedMovies}/>
      <MovieList title={"Upcoming"} movies={movie.upcomingMovies}/>
      <MovieList title={"Sci-Fi"} movies={movie.upcomingMovies}/>
      <MovieList title={"Anime"} movies={movie.upcomingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer