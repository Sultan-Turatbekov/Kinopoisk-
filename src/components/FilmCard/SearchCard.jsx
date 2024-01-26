import React from 'react';
import { useNavigate } from 'react-router-dom';
import './searchCardStyle.scss';

const SearchCard = ({ film }) => {
  const navigate = useNavigate();

  const toDetails = (e) => {
    navigate(`/${film.filmId}`);
  };
  const roundedRating = Math.round(film.rating / 2);
  const numStars = 5;

  return (
    <>
      <div className="searchFilmCard" onClick={(event) => toDetails(event)}>
        <div className="CardImg">
          <img
            height="100%"
            width="100%"
            src={film.posterUrlPreview}
            alt={film.nameRu}
          />
        </div>
        <div className="seacrhFilmText">
          <h1>
            {film.nameRu !== undefined ? film.nameRu : 'Название отсутствует'}
          </h1>
          <div className="seacrhGenres">
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
          <div className="seacrhRating">
            {[...Array(numStars)].map((_, index) => (
              <span key={index} className={index < roundedRating ? 'full' : ''}>
                &#9733;
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchCard;
