import Cast from 'components/Cast';
import Reviews from 'components/Reviews/Reviews';
import SharedLayout from 'components/SharedLayout';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import { Navigate, Route, Routes } from 'react-router-dom';
import MovieDetails from './../../pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;
