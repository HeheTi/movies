import { instanceTMDB } from "./client";
import type { TTrendingMovies } from "@/domain/movie/types";

const ends = {
  TRENDING: "/trending/movie/day",
  SEARCH: "/search/movie",
  DETAILS_MOVIE: "/movie",
  CREDITS: "/credits",
  REVIEWS: "/reviews",
};

const moviesApi = {
  getTrending: async (): Promise<TTrendingMovies> => {
    const { data } = await instanceTMDB.get(ends.TRENDING);
    return data;
  },
  searchMovies: async (query: string) => {
    const { data } = await instanceTMDB.get(ends.SEARCH, {
      params: { query },
    });
    return data;
  },
  getMovieDetails: async (id: string | number) => {
    const { data } = await instanceTMDB.get(`${ends.DETAILS_MOVIE}/${id}`);
    return data;
  },
  getMovieCast: async (id: string | number) => {
    const { data } = await instanceTMDB.get(
      `${ends.DETAILS_MOVIE}/${id}${ends.CREDITS}`
    );
    return data;
  },
  getMovieReview: async (id: string | number) => {
    const { data } = await instanceTMDB.get(
      `${ends.DETAILS_MOVIE}/${id}${ends.REVIEWS}`
    );
    return data;
  },
};

export default moviesApi;
