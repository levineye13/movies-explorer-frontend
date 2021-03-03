import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import './Techs.css';

const Techs = () => {
  return (
    <section className="techs">
      <div className="techs__content">
        <SectionTitle title="Технологии" />
        <h3 className="techs__title">7 технологий</h3>
        <p className="techs__description">
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
        <nav className="techs__menu">
          <ul className="techs__list">
            <li className="techs__item">
              <a
                href="https://developer.mozilla.org/ru/docs/Web/HTML"
                className="techs__link"
                target="_blank"
              >
                HTML
              </a>
            </li>
            <li className="techs__item">
              <a
                href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/CSS_basics"
                className="techs__link"
                target="_blank"
              >
                CSS
              </a>
            </li>
            <li className="techs__item">
              <a
                href="https://developer.mozilla.org/ru/docs/Web/JavaScript"
                className="techs__link"
                target="_blank"
              >
                JS
              </a>
            </li>
            <li className="techs__item">
              <a
                href="https://ru.reactjs.org"
                className="techs__link"
                target="_blank"
              >
                React
              </a>
            </li>
            <li className="techs__item">
              <a
                href="https://git-scm.com"
                className="techs__link"
                target="_blank"
              >
                Git
              </a>
            </li>
            <li className="techs__item">
              <a
                href="http://expressjs.com"
                className="techs__link"
                target="_blank"
              >
                Express.js
              </a>
            </li>
            <li className="techs__item">
              <a
                href="https://www.mongodb.com"
                className="techs__link"
                target="_blank"
              >
                mongoDB
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Techs;
