import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FilmCardStyle.scss';
import StarRating from '../StarRating/StarRating';

const FilmCard = ({ film }) => {
  const navigate = useNavigate();

  const toDetails = (e) => {
    navigate(`/${film.filmId}`);
  };
  const roundedRating = Math.round(film.rating / 2);

  return (
    <>
      <div className="filmCard">
        <img
          height="100%"
          width="100%"
          src={film.posterUrlPreview}
          alt={film.nameRu}
        />
        <div onClick={(event) => toDetails(event)} className="onHover">
          <h1>{film.nameRu}</h1>
          <div className="genres">
            {film.genres.map((item) => (
              <span key={item.genre}>{item.genre}</span>
            ))}
          </div>
          <h5>{film.year}</h5>
          <h5>
            {film.countries.map((item, index) => (
              <p key={index}>{item.country}</p>
            ))}
          </h5>
          <StarRating rating={roundedRating} />
        </div>
      </div>
    </>
  );
};

export default FilmCard;
