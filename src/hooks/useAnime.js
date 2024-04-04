import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addAnimeMovies } from "../utils/movieSlice";
import { useEffect } from "react";


const useAnimeMovies=()=>{
    const dispatch=useDispatch()
    const scifiMovies=useSelector((store)=>store.movie.scifiMovies)
    const getTopRatedMovies=async()=>{
        const url = 'https://api.themoviedb.org/3/search/collection?query=anime&include_adult=false&language=en-US&page=1';
        const response=await fetch(url,options)
        const data=await response.json()
        console.log(data)
        dispatch(addAnimeMovies(data.results))
    }
    useEffect(()=>{
        !scifiMovies && getTopRatedMovies()
    },[])
}

export default useAnimeMovies