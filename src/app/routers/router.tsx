import { createBrowserRouter } from "react-router";

import Layout from "@/shared/ui/Layout/Layout";
import HomePage from "@/pages/HomePage/HomePage";
import MoviesPage from "@/pages/MoviesPage/MoviesPage";
import MovieDetailsPage from "@/pages/MovieDetailsPage/MovieDetailsPage";
import Review from "@/features/movieDetails/ui/Review/Review";
import Cast from "@/features/movieDetails/ui/Cast/Cast";
import ProfilePage from "@/pages/ProfilePage/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        {
          path: "movies",
          Component: MoviesPage,
        },
        {
          path: "movies/:movieId",
          Component: MovieDetailsPage,
          children: [
            {
              path: "cast",
              Component: Cast,
            },
            {
              path: "review",
              Component: Review,
            },
          ],
        },
        {
          path: "profile",
          Component: ProfilePage,
        },
        {
          path: "*",
          Component: NotFoundPage,
        },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") }
);
