import React, { useState, useEffect } from 'react';
import './FilterCheckbox.css';

const FilterCheckbox = ({ filterFunction }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    if (isChecked) {
      filterFunction();
    }
  }, [isChecked]);

  return (
    <label className="short-movie" onClick={handleChange}>
      <input
        type="checkbox"
        className="short-movie__hidden"
        name="hiddenCheckbox"
        defaultChecked={isChecked}
      />
      <span className="short-movie__checkbox" />
      <span className="short-movie__filter-text">Короткометражки</span>
    </label>
  );
};

export default FilterCheckbox;
