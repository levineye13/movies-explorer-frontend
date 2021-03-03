import React from 'react';
import './Footer.css';
import { SOCIAL } from '../../utils/constants';

const { yandexPraktikum, github, facebook } = SOCIAL;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <h2 className="footer__title">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <p className="footer__copyright">&copy; 2020</p>
        <nav className="footer__menu">
          <ul className="footer__list">
            <li className="footer__item">
              <a
                href={yandexPraktikum.link}
                className="footer__link"
                target="_blank"
              >
                {yandexPraktikum.name}
              </a>
            </li>
            <li className="footer__item">
              <a href={github.link} className="footer__link" target="_blank">
                {github.name}
              </a>
            </li>
            <li className="footer__item">
              <a href={facebook.link} className="footer__link" target="_blank">
                {facebook.name}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
