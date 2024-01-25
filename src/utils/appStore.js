import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";
import userReducer from "./userSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    gpt: gptReducer,
    movie: movieReducer,
    user: userReducer,
  },
});

export default appStore;
