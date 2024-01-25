import React from "react";
import openai from "../utils/openai";
import { useRef } from "react";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGPTMovies } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const getMovie = async (movie) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`;
    const response = await fetch(url, options);

    const data = await response.json();
    return data.results;
  };

  const handleGPTSearchClick = async () => {
    const query =
      "Act a movie recommedation system a suggest movie for the query " +
      searchText.current.value +
      " only give me names of 5 movies, comma seprated like example result give ahead. Example Result: Gaddar, OMG, Don, Koi Mil gaya, Hum saath saath hai"; // Your query here

    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const gptMovies = chatCompletion.choices[0].message.content.split(',');

    const promiseArray = gptMovies.map((movie) => getMovie(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovies({ movieNames: gptMovies, movieResults: tmdbResults })
    );

    console.log(chatCompletion.choices[0].message.content);
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className=" w-full md:w-1/2 bg-black m-6 grid grid-cols-12 rounded"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 border border-gray-300 rounded col-span-9 focus:ring-blue-500 focus:border-blue-500"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className="bg-red-600 text-white rounded py-2 m-4 col-span-3 hover:bg-red-700"
          onClick={handleGPTSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
