import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import './headerStyle.scss';

export default function SearchAppBar({ onSearch }) {
  const [search, setSearch] = useState('');
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    onSearch(search);
  };
  const handleClear = () => {
    setSearch('');
  };

  return (
    <header>
      <div className="formContainer">
        <form onSubmit={handleSubmit} className="searchForm">
          <input
            type="text"
            placeholder="поиск"
            value={search}
            onChange={handleSearchChange}
          />
          <span className="searchIcon" onClick={handleSubmit}>
            <FontAwesomeIcon color="grey" icon={faMagnifyingGlass} />
          </span>
          <span className="deleteIcon" onClick={handleClear}>
            <FontAwesomeIcon color="grey" icon={faXmark} />
          </span>
        </form>
      </div>
    </header>
  );
}
