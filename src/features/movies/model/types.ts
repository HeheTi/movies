import type { TTrendingMovies } from "@/domain/movie/types";
import type { TAsyncState } from "@/shared/types/async";

export type TInitialStateMovies = {
  trending: TAsyncState<TTrendingMovies>;
};
