import React from 'react';
import SectionTitle from './../SectionTitle/SectionTitle';
import './AboutMe.css';
import avatar from './../../images/about-me-avatar.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <div className="about-me__content">
        <SectionTitle title="Студент" />
        <div className="about-me__info">
          <div className="about-me__info-wrapper">
            <h3 className="about-me__title">Олег</h3>
            <p className="about-me__subtitle">Фронтенд-разработчик, 21 год</p>
            <p className="about-me__description">
              Я родился и живу в городе Видное, учусь в РТУ МИРЭА (4 курс).
            </p>
            <nav className="about-me__social-menu">
              <ul className="about-me__social-list">
                <li className="about-me__social-item">
                  <a
                    href="https://www.facebook.com"
                    className="about-me__social-link"
                    target="_blank"
                  >
                    Facebook
                  </a>
                </li>
                <li className="about-me__social-item">
                  <a
                    href="https://github.com/levineye13"
                    className="about-me__social-link"
                    target="_blank"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <img src={avatar} alt="Фото профиля" className="about-me__avatar" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
