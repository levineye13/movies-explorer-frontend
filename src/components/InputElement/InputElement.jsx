import React, { useState } from 'react';
import './InputElement.css';

const InputElement = ({
  inputTitle = '',
  type = 'text',
  name = '',
  inputRef = null,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState('');

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
    setErrorText(target.validationMessage);
  };

  return (
    <label className="form-field">
      <span className="form-field__title">{inputTitle}</span>
      <input
        className="form-field__input"
        type={type}
        name={name}
        value={inputValue}
        required
        onChange={handleInputChange}
        ref={inputRef}
      />
      <span className="form-field__error">{errorText}</span>
    </label>
  );
};

export default InputElement;
