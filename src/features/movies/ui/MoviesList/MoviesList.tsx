import MoviesListItem from "../MoviesListItem/MoviesListItem";

import type { TMovie } from "@/domain/movie/types";

type TMoviesList = {
  movies: TMovie[];
};

const MoviesList = ({ movies }: TMoviesList) => {
  return (
    <ul>
      {movies.map((movie) => (
        <MoviesListItem key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
