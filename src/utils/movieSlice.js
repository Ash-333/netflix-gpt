import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies:null,
    topRatedMovies:null,
    upcomingMovies:null,
    scifiMovies:null,
    animeMovies:null
  },

  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) =>{
        state.trailerVideo = action.payload
    },
    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload
    },
    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload
    },
    addScifiMovies:(state,action)=>{
      state.scifiMovies=action.payload
    },
    addAnimeMovies:(state,action)=>{
      state.animeMovies=action.payload
    },
  },
});

export const { addNowPlayingMovies, addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addScifiMovies,addAnimeMovies} = movieSlice.actions;
export default movieSlice.reducer;
