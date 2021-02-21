import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../images/logo.svg';
import './Header.css';

const Header = ({ headerType }) => {
  const isLanding = headerType === 'landing' ? true : false;

  return (
    <header className={`header ${isLanding ? 'header_type_landing' : ''}`}>
      <div className="header__content">
        <Link className="header__link-logo" to="/" target="_blank">
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <nav
          className={`header__menu ${
            isLanding ? 'header__menu_invisible' : ''
          }`}
        >
          <NavLink
            exact
            to="/movies"
            className="header__link"
            activeClassName="header__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="header__link"
            activeClassName="header__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        {isLanding ? (
          <nav className="header__menu-auth">
            <NavLink
              to="/signup"
              className="header__link-auth"
              activeClassName="header__link-auth_active"
            >
              Регистрация
            </NavLink>
            <NavLink
              to="/signin"
              className={`header__link-auth ${
                isLanding ? 'header__link-auth_active' : ''
              }`}
              activeClassName="header__link-auth_active"
            >
              Войти
            </NavLink>
          </nav>
        ) : (
          <Link to="/profile" className="header__account">
            Аккаунт
          </Link>
        )}
      </div>
    </header>
  );
};

export default Header;
