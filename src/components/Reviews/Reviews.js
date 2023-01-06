import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsMovieById } from 'servises/api';
import { useState } from 'react';
import { AuthorName, Item } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [infoReviews, setInfoReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { results } = await fetchReviewsMovieById(movieId);
        setInfoReviews(results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  if (infoReviews.length === 0) {
    return <p>We don't have any reviews for this movie</p>;
  }

  return (
    <>
      <ul>
        {infoReviews.map(({ author, content, id }) => (
          <Item key={id}>
            <AuthorName>Author: {author}</AuthorName>
            <p>{content}</p>
          </Item>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
