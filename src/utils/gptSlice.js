import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieResults:null,
    movieNames:null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovies:(state,actions)=>{
      const {movieNames,movieResults}=actions.payload
      state.movieNames=movieNames
      state.movieResults=movieResults
    }
  },
});

export const { toggleGPTSearchView,addGPTMovies } = gptSlice.actions;
export default gptSlice.reducer;
