import React from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = () => {
  return (
    <label className="short-movie">
      <input
        type="checkbox"
        className="short-movie__hidden"
        name="hiddenCheckbox"
      />
      <span className="short-movie__checkbox" />
      <span className="short-movie__filter-text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
