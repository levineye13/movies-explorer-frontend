import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../images/logo.svg';
import Sidebar from './../Sidebar/Sidebar';
import './Header.css';
import { HEADER_TYPE, PATHNAME } from '../../utils/constants';

const { landing } = HEADER_TYPE;
const { root, movies, saved, signin, signup, profile } = PATHNAME;

const Header = ({ headerType }) => {
  const isLanding = headerType === landing ? true : false;

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsActiveMenu(true);
  };

  const handleCloseMenu = () => {
    setIsActiveMenu(false);
  };

  return (
    <header className={`header ${isLanding ? 'header_type_landing' : ''}`}>
      <div className="header__content">
        <Link className="header__link-logo" to={root}>
          <img className="header__logo" src={logo} alt="Логотип" />
        </Link>
        <nav
          className={`header__menu ${
            isLanding ? 'header__menu_invisible' : ''
          }`}
        >
          <NavLink
            exact
            to={movies}
            className="header__link"
            activeClassName="header__link_active"
          >
            Фильмы
          </NavLink>
          <NavLink
            to={saved}
            className="header__link"
            activeClassName="header__link_active"
          >
            Сохранённые фильмы
          </NavLink>
        </nav>
        {isLanding ? (
          <nav className="header__menu-auth">
            <Link to={signup} className="header__link-auth">
              Регистрация
            </Link>
            <Link
              to={signin}
              className="header__link-auth header__link-auth_type_signin"
            >
              Войти
            </Link>
          </nav>
        ) : (
          <>
            <Link to={profile} className="header__account">
              Аккаунт
            </Link>
            <button
              className={`header__button-menu ${
                isActiveMenu ? 'header__button-menu_active' : ''
              }`}
              type="button"
              onClick={handleOpenMenu}
            >
              <span className="header__button-element" />
            </button>
            <Sidebar isOpen={isActiveMenu} onClose={handleCloseMenu} />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
