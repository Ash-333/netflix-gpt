import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useTopRatedMovies=()=>{
    const dispatch=useDispatch()
    const topRatedMovies=useSelector((store)=>store.movie.topRatedMovies)
    const getTopRatedMovies=async()=>{
        const url = 'https://api.themoviedb.org/3/movie/top_rated?&page=1';
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(data)
        dispatch(addTopRatedMovies(data.results))
    }
    useEffect(()=>{
        !topRatedMovies && getTopRatedMovies()
    },[])
}

export default useTopRatedMovies