import PropTypes from 'prop-types';
import MovieItem from './MovieItem';

const MoviesList = ({ movies = [] }) => {
  return (
    <ul>
      {movies.map(
        ({ id, original_title, overview, release_date, poster_path }) => (
          <MovieItem
            key={id}
            title={original_title}
            overview={overview}
            date={release_date}
            posterPath={poster_path}
            id={id}
          />
        )
      )}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MoviesList;
