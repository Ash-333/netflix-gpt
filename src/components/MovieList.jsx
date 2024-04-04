import { useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { GrFormPrevious,GrFormNext } from "react-icons/gr";

const MovieList = ({ title, movies }) => {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 200;

    if (container) {
      if (direction === "left") {
        container.scrollLeft -= scrollAmount;
      } else {
        container.scrollLeft += scrollAmount;
      }

      setScrollPosition(container.scrollLeft);
    }
  };
  return (
    <div className="p-4 ">
      <h1 className={`text-lg md:text-3xl py-3`}>
        {title}
      </h1>
      {movies && (
        <div className="flex overflow-x-scroll no-scrollbar" ref={scrollRef} onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
          {isHovered && <button className="absolute left-4 my-24" onClick={() => handleScroll("left")}><GrFormPrevious size={45} /></button>}
        <div className="flex gap-2">
          {movies.map((movie) => (
            <MovieCard key={movie.id} moviePoster={movie.poster_path} />
          ))}
        </div>
        {isHovered && <button className="absolute right-4 my-24" onClick={() => handleScroll("right")}><GrFormNext size={45}  /></button>}
      </div>
      )}
    </div>
  );
};

export default MovieList;
