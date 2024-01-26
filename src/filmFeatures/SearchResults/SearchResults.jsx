// SearchResults.jsx
import React from 'react';
import SearchCard from '../../components/FilmCard/SearchCard';
import './ResultsStyle.scss';

const SearchResults = ({ results }) => {
  return (
    <div className="searchResultsContainer">
      {results.map((item) => (
        <SearchCard key={item.filmId} film={item} />
      ))}
    </div>
  );
};

export default SearchResults;
