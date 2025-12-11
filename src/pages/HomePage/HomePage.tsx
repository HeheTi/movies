import { useEffect } from "react";
import { useSelector } from "react-redux";

import MoviesList from "@/features/movies/ui/MoviesList/MoviesList";

import { useAppDispatch } from "@/app/redux/hooks";
import { REQUEST_STATUS } from "@/shared/types/request";
import { movieSelectors, movieThunks } from "@/features/movies/model";

const HomePage = () => {
  const dispatch = useAppDispatch();
  const trending = useSelector(movieSelectors.selectMoviesTrending);
  const trendingStatus = useSelector(movieSelectors.selectMoviesStatus);
  const trendingError = useSelector(movieSelectors.selectMoviesTrendingError);

  useEffect(() => {
    if (trendingStatus === REQUEST_STATUS.idle) {
      dispatch(movieThunks.fetchTrendingMovies());
    }
  }, [dispatch, trendingStatus]);

  const handleRetryFetchTrending = () => {
    dispatch(movieThunks.fetchTrendingMovies());
  };

  return (
    <div>
      <h2>Trending today</h2>
      {trendingStatus === REQUEST_STATUS.pending && <p> Loading...</p>}
      {trendingError && (
        <div>
          <p>{trendingError.message}</p>
          <button type="button" onClick={handleRetryFetchTrending}>
            Retry
          </button>
        </div>
      )}

      {trending.length > 0 && <MoviesList movies={trending} />}
    </div>
  );
};

export default HomePage;
