import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AuthenticationSection.css';
import logo from './../../images/logo.svg';
import { TAB_KEY } from '../../utils/constants';

const AuthenticationSection = ({
  title,
  children,
  textButton,
  question,
  pathname,
  textLink,
  textRequest,
  inputRef,
  isValidForm,
  onSubmit,
}) => {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFocus = (evt) => {
    if (evt.key === TAB_KEY) {
      evt.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsDisabled(true);

    await onSubmit();

    setIsDisabled(false);
  };

  return (
    <section className="authentication page__authentication">
      <div className="authentication__content">
        <img src={logo} className="authentication__logo" alt="Логотип" />
        <h1 className="authentication__title">{title}</h1>
        <form
          action="#"
          className="authentication__form"
          name="authForm"
          noValidate
          onSubmit={handleSubmit}
        >
          <fieldset
            className="authentication__user-input"
            disabled={isDisabled}
          >
            {children}
          </fieldset>
          <span className="authentication__request-error">{textRequest}</span>
          <button
            className="authentication__submit"
            type="submit"
            disabled={!isValidForm || isDisabled}
          >
            {textButton}
          </button>
        </form>
        <p className="authentication__question">
          {question}
          <Link
            to={pathname}
            className="authentication__link"
            onKeyDown={handleFocus}
          >
            {textLink}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default AuthenticationSection;
