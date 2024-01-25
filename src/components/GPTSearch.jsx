import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { Bg_IMG } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="-z-10 fixed">
        <img className="h-screen object-cover md:w-screen" src={Bg_IMG} alt="bg" />
      </div>
      <div className="pt-[30%] md:p-0">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </div>
  );
};

export default GPTSearch;
