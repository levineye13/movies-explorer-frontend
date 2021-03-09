import React, { useState } from 'react';
import './InputElement.css';

const InputElement = ({
  inputTitle = '',
  type = 'text',
  name = '',
  inputRef = null,
  value,
  error,
  onChange,
}) => {
  return (
    <label className="form-field">
      <span className="form-field__title">{inputTitle}</span>
      <input
        className="form-field__input"
        type={type}
        name={name}
        value={value || ''}
        required
        onChange={onChange}
        ref={inputRef}
      />
      <span className="form-field__error">{error || ''}</span>
    </label>
  );
};

export default InputElement;
