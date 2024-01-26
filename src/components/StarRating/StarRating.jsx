import React from 'react';
import './RatingStyle.scss';

const StarRating = ({ rating }) => {
  const normalizedRating = Math.round(rating);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < normalizedRating ? 'full' : ''}>
      &#9733;
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
