import React from 'react';
import DefaultImg from 'images/notfound.jpg';
import PropTypes from 'prop-types';
import {
  ImgWrapper,
  DescWrapper,
  TextName,
  Text,
  Item,
} from './CastItem.styled';

const CastItem = ({ path, name, character }) => {
  return (
    <Item>
      <ImgWrapper>
        <img
          src={path ? `https://image.tmdb.org/t/p/w200${path}` : DefaultImg}
          alt={name}
        />
      </ImgWrapper>
      <DescWrapper>
        <TextName>{name}</TextName>
        <Text>Character: {character}</Text>
      </DescWrapper>
    </Item>
  );
};

CastItem.propTypes = {};

export default CastItem;
