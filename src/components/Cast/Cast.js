import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastMovieById } from 'servises/api';
import { List } from './Cast.styled';
import CastItem from './CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const { cast } = await fetchCastMovieById(movieId);
        setCastInfo(cast);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCredits();
  }, [movieId]);

  if (!castInfo) {
    return false;
  }

  return (
    <List>
      {castInfo.map(({ profile_path, name, character, id }) => (
        <CastItem
          key={id}
          path={profile_path}
          name={name}
          character={character}
        />
      ))}
    </List>
  );
};

export default Cast;
