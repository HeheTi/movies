import React from 'react';
import PropTypes from 'prop-types';
import DefaultImg from 'images/notfound.jpg';
import {
  CardWrapper,
  DescrWrapper,
  ImgWrapper,
  Text,
} from './MovieCardInfo.styled';
import { Box } from 'common/Box';

const MovieCardInfo = ({
  title,
  overview,
  genres = {},
  date,
  vote,
  path,
  tagline,
}) => {
  const poster = path ? `https://image.tmdb.org/t/p/w500${path}` : DefaultImg;
  return (
    <CardWrapper>
      <ImgWrapper>
        <img src={poster} alt={title} />
      </ImgWrapper>
      <DescrWrapper>
        <Box as="h2" mb="10px" color="#8422ab">
          {title} <span>({date?.slice(0, 4) || 'No data'})</span>
        </Box>
        <Text>User Score: {Math.round((vote / 10) * 100)} %</Text>
        <Box as="h3" mb="10px">
          Overview
        </Box>
        <Text>{overview}</Text>
        <Box as="h4" mb="10px">
          Genres
        </Box>
        <Text> {genres.map(({ name }) => name)?.join(', ') || 'No genre'}</Text>
        {tagline && (
          <>
            <Box as="h4" mb="10px">
              Tagline
            </Box>
            <p>{tagline}</p>
          </>
        )}
      </DescrWrapper>
    </CardWrapper>
  );
};

MovieCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  path: PropTypes.string,
  tagline: PropTypes.string,
};

export default MovieCardInfo;
