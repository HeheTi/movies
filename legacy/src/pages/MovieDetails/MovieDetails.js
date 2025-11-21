import { useEffect, useState } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import MovieCardInfo from 'components/MovieCardInfo';
import { fetchMovieById } from 'servises/api';
import {
  AdditionalInfoWrapper,
  AdditionalLink,
  Item,
  LinkBack,
  Text,
} from './MovieDetails.styled';
import { ReactComponent as IconArrowLeft } from 'images/iconmonstr-arrow-left-thin.svg';
import { ReactComponent as CastMan } from 'images/man-in-love-svgrepo-com.svg';
import { ReactComponent as RevieIcon } from 'images/postcard-with-written.svg';
import { Box } from 'common/Box';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const location = useLocation();
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const data = await fetchMovieById(movieId);
        setMovieInfo(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovie();
  }, [movieId]);

  if (!movieInfo) {
    return null;
  }

  const {
    title,
    overview,
    tagline,
    genres,
    release_date,
    vote_average,
    poster_path,
  } = movieInfo;

  return (
    <div>
      <LinkBack to={location.state?.from ?? '/'}>
        <IconArrowLeft />
        Go back
      </LinkBack>
      <MovieCardInfo
        title={title}
        overview={overview}
        genres={genres}
        date={release_date}
        vote={vote_average}
        path={poster_path}
        tagline={tagline}
      />
      <AdditionalInfoWrapper>
        <Text>Additional information</Text>
        <Box as="ul" display="flex">
          <Item>
            <AdditionalLink
              to="cast"
              state={{ from: location.state?.from ?? null }}
            >
              <CastMan width="20px" height="20px" />
              Cast
            </AdditionalLink>
          </Item>
          <Item>
            <AdditionalLink
              to="reviews"
              state={{ from: location.state?.from ?? null }}
            >
              <RevieIcon width="20px" height="20px" />
              Reviews
            </AdditionalLink>
          </Item>
        </Box>
      </AdditionalInfoWrapper>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
