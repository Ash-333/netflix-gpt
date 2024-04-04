import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({moviePoster}) => {
  if(!moviePoster) return null
  return (
    <div className='w-36 md:w-48 hover:scale-105'>
        <img className='rounded ' src={IMG_CDN+moviePoster} alt="movie_poster" />
    </div>
  )
}

export default MovieCard