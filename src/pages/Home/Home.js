import { useState } from 'react';
import { useEffect } from 'react';
import { fetchTrandingMovies } from 'servises/api';
import MoviesList from 'components/MoviesList';
import { Header } from './Home.styled';

const Home = props => {
  const [trandingMovies, setTrandingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { results, page, total_pages } = await fetchTrandingMovies();
        setTrandingMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <Header>Tranding today</Header>
      {trandingMovies.length > 0 && <MoviesList movies={trandingMovies} />}
    </>
  );
};

export default Home;
