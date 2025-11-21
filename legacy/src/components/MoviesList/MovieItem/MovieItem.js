import PropTypes from 'prop-types';
import DefaultImg from 'images/notfound.jpg';
import { useLocation } from 'react-router-dom';
import {
  DescriptionWrapper,
  ImgWrapper,
  Item,
  ItemLink,
  Text,
  Title,
} from './MovieItem.styled';

const MovieItem = ({ title, overview, date, posterPath, id }) => {
  const location = useLocation();
  const poster = posterPath
    ? `https://image.tmdb.org/t/p/w200${posterPath}`
    : DefaultImg;

  return (
    <Item>
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        <ImgWrapper>
          <img src={poster} alt={title} />
        </ImgWrapper>
        <DescriptionWrapper>
          <Title>{title}</Title>
          <Text>{overview}</Text>
          <p>{date} </p>
        </DescriptionWrapper>
      </ItemLink>
    </Item>
  );
};

MovieItem.propTypes = {
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  posterPath: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default MovieItem;
