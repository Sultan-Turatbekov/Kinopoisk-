import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilmDetails, getFilmFacts } from './FilmDetailsSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './DetailsStyle.scss';

const FilmDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  // const handleGoBack = () => {
  //   window.location.href = '/';
  // };
  const handleGoBack = () => {
    navigate(-1);
  };

  const currentFilm = useSelector((state) => state.filmDetails.currentFilm);
  console.log('currentFilm: ', currentFilm);

  const getFilm = useCallback(async () => {
    dispatch(getFilmDetails(params.id));
  }, [dispatch, params]);

  useEffect(() => {
    getFilm();
    dispatch(getFilmFacts(params.id));
  }, [getFilm, dispatch, params]);

  const blurredBackgroundStyles = {
    backgroundImage: `url(${currentFilm.posterUrl})`,
    position: 'absolute',
    filter: 'blur(4px)',
    top: 0,
    left: 0,
    zIndex: '-1',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    height: '100vh',
    width: '100%',
  };

  return (
    <>
      <div style={blurredBackgroundStyles}></div>
      <div className="filmDetails">
        <div onClick={handleGoBack} className="goBackBtn">
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className="filmImg">
          <img src={currentFilm.posterUrlPreview} alt={currentFilm.nameRu} />
        </div>
        <div className="filmText">
          <h1>{currentFilm.nameRu}</h1>
          <h3>{currentFilm.nameOriginal}</h3>
          <ul>
            <h4>Жанры:</h4>
            {currentFilm.genres &&
              currentFilm.genres.map((item) => {
                <li>{item.genre}</li>;
              })}
          </ul>
          <ul>
            <h4>Страны:</h4>
            {currentFilm.countries &&
              currentFilm.countries.map((item) => {
                <li>{item.country}</li>;
              })}
          </ul>
          <p>Год выпуска: {currentFilm.year} год</p>
          <p>Длительность фильма: {currentFilm.filmLength} мин.</p>
          <p>
            рейтинг Кинопоиска: {currentFilm.ratingKinopoisk}, проголосовало:{' '}
            {currentFilm.ratingKinopoiskVoteCount} голосов
          </p>
          <p>
            рейтинг IMDb: {currentFilm.ratingImdb}, проголосовало:{' '}
            {currentFilm.ratingImdbVoteCount} голосов
          </p>
          <h4>Описание:</h4>
          <p>{currentFilm.description}</p>
          <div className="toSeeBtn">
            <a href={currentFilm.webUrl}>Смотреть</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilmDetails;
