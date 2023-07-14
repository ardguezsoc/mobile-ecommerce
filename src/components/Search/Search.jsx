import React from 'react';
import './index.scss';
import debounce from '../../utils/debounce';
import { useTranslation } from 'react-i18next';

export const Search = ({ setSearchData }) => {
  const { t } = useTranslation();

  return (
    <div className="searchContainer">
      <div className="searchBox">
        <input
          className="searchInput"
          id="serachInput"
          type="text"
          placeholder={t('searchNotFound')}
          onChange={debounce((e) => setSearchData(e.target.value))}
        />
        <img src="/icons/search.svg" alt="search-icon" />
      </div>
    </div>
  );
};
