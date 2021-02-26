import React from 'react';
import InputElement from './../InputElement/InputElement';
import searchImg from './../../images/movies-search.svg';
import './SearchForm.css';

const SearchForm = () => {
  return (
    <form action="#" className="search-form" name="searchForm" noValidate>
      <label className="search-form__label">
        <span className="search-form__search-img" />
        <InputElement type="text" placeholder="Фильм" />
        <button className="search-form__submit" type="submit" />
      </label>
    </form>
  );
};

export default SearchForm;
