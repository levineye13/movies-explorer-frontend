import React from 'react';
import { Link } from 'react-router-dom';
import './AuthenticationSection.css';
import logo from './../../images/logo.svg';

const AuthenticationSection = ({
  title,
  children,
  textButton,
  question,
  pathname,
  textLink,
  inputRef,
}) => {
  const handleFocus = (evt) => {
    if (evt.key === 'Tab') {
      evt.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className="authentication page__authentication">
      <div className="authentication__content">
        <img src={logo} alt="" className="authentication__logo" alt="Логотип" />
        <h1 className="authentication__title">{title}</h1>
        <form
          action="#"
          className="authentication__form"
          name="authForm"
          noValidate
        >
          <fieldset className="authentication__user-input">{children}</fieldset>
          <button
            className="authentication__submit"
            type="submit"
            onClick={handleSubmit}
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
