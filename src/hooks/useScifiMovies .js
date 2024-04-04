import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addScifiMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useScifiMovies=()=>{
    const dispatch=useDispatch()
    const scifiMovies=useSelector((store)=>store.movie.scifiMovies)
    const getTopRatedMovies=async()=>{
        const url = 'https://api.themoviedb.org/3/tv/popular?language=en-US&page=1';
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(data)
        dispatch(addScifiMovies(data.results))
    }
    useEffect(()=>{
        !scifiMovies && getTopRatedMovies()
    },[])
}

export default useScifiMovies