import React from 'react';
import landingLogo from './../../images/landing-logo.svg';
import './Promo.css';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__content">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className="promo__img" src={landingLogo} alt="Логотип лендинга" />
      </div>
    </section>
  );
};

export default Promo;
