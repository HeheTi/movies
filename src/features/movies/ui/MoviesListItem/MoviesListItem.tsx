import { Link, useLocation } from "react-router";

import DefaultImg from "@/assets/notfound.jpg";

import type { TMovie } from "@/domain/movie/types";

type TMoviesListItem = {
  movie: TMovie;
};

const MoviesListItem = ({ movie }: TMoviesListItem) => {
  const { id, poster_path, title, overview, release_date } = movie;

  const location = useLocation();
  const poster = poster_path
    ? `https://image.tmdb.org/t/p/w200${poster_path}`
    : DefaultImg;

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div>
          <img src={poster} alt={title} />
        </div>
        <div>
          <h2>{title}</h2>
          <p>{overview}</p>
          <p>{release_date}</p>
        </div>
      </Link>
    </li>
  );
};

export default MoviesListItem;
