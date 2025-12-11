import { createSelector } from "@reduxjs/toolkit";

import type { RootState } from "@/app/redux/store";

export const selectMoviesState = (state: RootState) => state.movies;

export const selectMoviesTrending = createSelector(
  selectMoviesState,
  (movies) => movies.trending.data.results
);

export const selectMoviesStatus = createSelector(
  selectMoviesState,
  (movies) => movies.trending.status
);

export const selectMoviesTrendingError = createSelector(
  selectMoviesState,
  (movies) => movies.trending.error
);
