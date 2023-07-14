import React from 'react';
import './index.scss';
import debounce from '../../utils/debounce';

export const Search = ({ setSearchData }) => {
  return (
    <div className="searchContainer">
      <div className="searchBox">
        <input
          className="searchInput"
          id="serachInput"
          type="text"
          placeholder="Search a product..."
          onChange={debounce((e) => setSearchData(e.target.value))}
        />
        <img src="/icons/search.svg" alt="search-icon" />
      </div>
    </div>
  );
};
