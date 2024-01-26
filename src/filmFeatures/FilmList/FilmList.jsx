import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import FilmCard from '../../components/FilmCard/FilmCard';
import SearchAppBar from '../../components/Header/Header';
import NotFoundPage from '../../components/NotFoundPage/NotFoundPage';
import SearchResults from '../SearchResults/SearchResults';
import { getFilms, getFilmsBySearch } from './filmsListSlice';

import './FilmListStyle.scss';

const FilmList = () => {
  const list = useSelector((state) => state.filmsList.list);
  const isLoading = useSelector((state) => state.filmsList.isLoading);

  const dispatch = useDispatch();
  const [searchResults, setSearchResults] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  const handleSearch = async (search) => {
    const results = await dispatch(getFilmsBySearch(search));
    setSearchResults(results.payload.films);
  };

  if (isLoading) {
    return <div className="loading">Loading</div>;
  } else if (searchResults && searchResults.length > 0) {
    return (
      <div>
        <SearchAppBar onSearch={handleSearch} />
        <SearchResults results={searchResults} />
      </div>
    );
  } else if (list && list.length > 0) {
    return (
      <div>
        <SearchAppBar onSearch={handleSearch} />
        <div className="gridContainer">
          {list.map((item) => (
            <FilmCard film={item} key={item.filmId} />
          ))}
        </div>
      </div>
    );
  } else {
    return <NotFoundPage />;
  }
};

export default FilmList;
