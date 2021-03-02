import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Sidebar.css';
import { PATHNAME } from '../../utils/constants';

const { root, movies, saved, profile } = PATHNAME;

const Sidebar = ({ isOpen, onClose }) => {
  const handleCloseMenuScreenClick = ({ target }) => {
    if (target.classList.contains('sidebar_opened')) {
      onClose();
    }
  };

  return (
    <aside
      className={`sidebar ${isOpen ? 'sidebar_opened' : ''}`}
      onClick={handleCloseMenuScreenClick}
    >
      <div
        className={`sidebar__content ${
          isOpen ? 'sidebar__content_opened' : ''
        }`}
      >
        <button className="sidebar__button" type="button" onClick={onClose} />
        <nav className="sidebar__menu">
          <ul className="sidebar__list">
            <li className="sidebar__item">
              <NavLink
                exact
                to={root}
                className="sidebar__link"
                activeClassName="sidebar__link_active"
                onClick={onClose}
              >
                Главная
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink
                to={movies}
                className="sidebar__link"
                activeClassName="sidebar__link_active"
                onClick={onClose}
              >
                Фильмы
              </NavLink>
            </li>
            <li className="sidebar__item">
              <NavLink
                to={saved}
                className="sidebar__link"
                activeClassName="sidebar__link_active"
                onClick={onClose}
              >
                Сохранённые фильмы
              </NavLink>
            </li>
          </ul>
        </nav>
        <Link to={profile} className="sidebar__account">
          Аккаунт
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
