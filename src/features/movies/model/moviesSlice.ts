import type { TTrendingMovies } from "@/domain/movie/types";
import { REQUEST_STATUS } from "@/shared/types/request";
import { createSlice } from "@reduxjs/toolkit";
import { fetchTrendingMovies } from "./thunks";
import type { TInitialStateMovies } from "./types";

const getInitialTrending = (): TTrendingMovies => ({
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
});

const getInitialState = (): TInitialStateMovies => ({
  trending: {
    data: getInitialTrending(),
    status: REQUEST_STATUS.idle,
    error: null,
  },
});

const trending = createSlice({
  name: "movies",
  initialState: getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingMovies.pending, (state) => {
        state.trending.error = null;
        state.trending.status = REQUEST_STATUS.pending;
      })
      .addCase(fetchTrendingMovies.fulfilled, (state, action) => {
        state.trending.data = action.payload;
        state.trending.status = REQUEST_STATUS.success;
      })
      .addCase(fetchTrendingMovies.rejected, (state, action) => {
        state.trending.status = REQUEST_STATUS.failed;
        if (action.payload) {
          state.trending.error = action.payload;
        } else {
          state.trending.error = {
            status: -1,
            message: action.error?.message ?? "Unknown error",
          };
        }
      });
  },
});

export default trending.reducer;
