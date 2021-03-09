import React from 'react';
import FilterCheckbox from './../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const SearchForm = ({ onSubmit }) => {
  const { values, isValidForm, handleInputChange } = useFormWithValidation();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await onSubmit();
  };

  return (
    <form
      action="#"
      className="search-form movies__search-form saved-movies__search-form"
      name="searchForm"
      noValidate
      onSubmit={handleSubmit}
    >
      <label className="search-form__label">
        <span className="search-form__search-img" />
        <input
          type="text"
          className="search-form__input"
          name="movieInput"
          placeholder="Фильм"
          required
          onChange={handleInputChange}
          value={values.movieInput || ''}
        />
        <button
          className="search-form__submit"
          type="submit"
          disabled={!isValidForm}
        />
      </label>
      <FilterCheckbox />
    </form>
  );
};

export default SearchForm;
