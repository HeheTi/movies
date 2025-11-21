import { Box } from 'common/Box';
import MoviesList from 'components/MoviesList';
import SearchForm from 'components/SearchForm';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMoviesByQuery } from 'servises/api';
import { TextInfo } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchSearchMovies = async () => {
      try {
        const { results } = await fetchSearchMoviesByQuery(query);
        setSearchMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSearchMovies();
  }, [query]);

  const submitForm = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.query.value.trim();
    if (!value) {
      console.log('write query');
      return;
    }
    if (value === query) {
      console.log(`You are already looking for it : ${query}`);
      e.currentTarget.reset();
      return;
    }

    setSearchParams({ query: value });
    e.currentTarget.reset();
  };

  return (
    <div>
      {!!query && (
        <TextInfo>
          You are looking for movies similar to: <span>{query}</span>
        </TextInfo>
      )}

      <Box mb="16px">
        <SearchForm onSubmit={submitForm} />
      </Box>

      {searchMovies.length === 0 && !!query && (
        <p>Nothing found for your request</p>
      )}
      {searchMovies.length > 0 && <MoviesList movies={searchMovies} />}
    </div>
  );
};

export default Movies;
