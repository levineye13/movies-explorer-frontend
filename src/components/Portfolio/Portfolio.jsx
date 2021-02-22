import React from 'react';
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__content">
        <h2 className="portfolio__title">Портфолио</h2>
        <nav className="portfolio__menu">
          <ul className="portfolio__list">
            <li className="portfolio__item">
              <a
                href="https://levineye13.github.io/project-company"
                className="portfolio__link"
                target="_blank"
              >
                Статичный сайт
              </a>
            </li>
            <li className="portfolio__item">
              <a
                href="https://levineye13.github.io/russian-travel"
                className="portfolio__link"
                target="_blank"
              >
                Адаптивный сайт
              </a>
            </li>
            <li className="portfolio__item">
              <a
                href="http://www.ilovemesto.students.nomoreparties.xyz"
                className="portfolio__link"
                target="_blank"
              >
                Одностраничное приложение
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Portfolio;
