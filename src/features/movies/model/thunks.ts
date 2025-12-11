import type { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import moviesApi from "@/services/tmdb/moviesApi";
import type { TTrendingMovies } from "@/domain/movie/types";
import type { ApiError, ApiErrorResponse } from "@/shared/types/errors";

export const fetchTrendingMovies = createAsyncThunk<
  TTrendingMovies,
  void,
  { rejectValue: ApiError }
>("movies/fetchTrending", async (_, { rejectWithValue }) => {
  try {
    const data = await moviesApi.getTrending();
    return data;
  } catch (error: unknown) {
    const err = error as AxiosError<ApiErrorResponse>;

    const errorMessage =
      err?.response?.data?.message ?? "Failed to fetch trending movies";
    return rejectWithValue({
      status: err.response?.status ?? 0,
      message: errorMessage,
    });
  }
});
