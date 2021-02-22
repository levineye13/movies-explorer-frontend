import React from 'react';
import './Footer.css';

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
                href="https://praktikum.yandex.ru"
                className="footer__link"
                target="_blank"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://github.com/levineye13"
                className="footer__link"
                target="_blank"
              >
                Github
              </a>
            </li>
            <li className="footer__item">
              <a
                href="https://www.facebook.com"
                className="footer__link"
                target="_blank"
              >
                Facebook
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
