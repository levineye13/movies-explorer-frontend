import React from 'react';
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
  inputRef,
  isValidForm,
  onSubmit,
}) => {
  const handleFocus = (evt) => {
    if (evt.key === TAB_KEY) {
      evt.preventDefault();
      inputRef.current.focus();
    }
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await onSubmit();
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
          <fieldset className="authentication__user-input">{children}</fieldset>
          <span className="authentication__request-error">
            Вы ввели неправильный логин или пароль.
          </span>
          <button
            className="authentication__submit"
            type="submit"
            disabled={!isValidForm}
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
