import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies, addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useUpcomingMovies=()=>{
    const dispatch=useDispatch()
    const upcomingMovies=useSelector(store=>store.movie.upcomingMovies)
    const getUpcomingMovies=async()=>{
        const url = 'https://api.themoviedb.org/3/movie/upcoming?&page=1';
        const response=await fetch(url,options)
        const data=await response.json()
        dispatch(addUpcomingMovies(data.results))
    }
    useEffect(()=>{
        !upcomingMovies && getUpcomingMovies()
    },[])
}

export default useUpcomingMovies