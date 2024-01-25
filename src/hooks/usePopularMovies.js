import { useDispatch,useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { options } from "../utils/constants";

const usePopularMovies=()=>{
    const dispatch=useDispatch()
    const popularMovies=useSelector(store=>store.movie.popularMovies)
    const getPopularMovies=async()=>{
        const url = 'https://api.themoviedb.org/3/movie/popular';
        const response=await fetch(url,options)
        const data=await response.json()
        dispatch(addPopularMovies(data.results))
    }

    useEffect(()=>{
        !popularMovies && getPopularMovies()
    },[])
}


export default usePopularMovies