export type TMovie = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  release_date: string;
};

export type TTrendingMovies = {
  page: number;
  results: TMovie[];
  total_pages: number;
  total_results: number;
};
