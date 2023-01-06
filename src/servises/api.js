const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'api_key=eb3951110f37c8ee30f5e146dc484168';

const ends = {
  TRENDING: '/trending/movie/day',
  SEARCH: '/search/movie',
  DETAILS_MOVIE: '/movie',
  CREDITS: '/credits',
  REVIEWS: '/reviews',
};

const fetchMovies = async (path = '/', query) => {
  const queryString = query ? `${API_KEY}&${query}` : API_KEY;
  const res = await fetch(`${BASE_URL}${path}?${queryString}`);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const fetchTrandingMovies = () => fetchMovies(ends.TRENDING);

const fetchSearchMoviesByQuery = searchQuery =>
  fetchMovies(ends.SEARCH, `query=${searchQuery}`);

const fetchMovieById = id => fetchMovies(`${ends.DETAILS_MOVIE}/${id}`);

const fetchCastMovieById = id =>
  fetchMovies(`${ends.DETAILS_MOVIE}/${id + ends.CREDITS}`);

const fetchReviewsMovieById = id =>
  fetchMovies(`${ends.DETAILS_MOVIE}/${id + ends.REVIEWS}`);

export {
  fetchTrandingMovies,
  fetchMovieById,
  fetchCastMovieById,
  fetchReviewsMovieById,
  fetchSearchMoviesByQuery,
};
