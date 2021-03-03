import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const { goBack } = useHistory();

  return (
    <section className="not-found">
      <div className="not-found__content">
        <h2 className="not-found__title">404</h2>
        <p className="not-found__subtitle">Страница не найдена</p>
        <button type="button" className="not-found__back" onClick={goBack}>
          Назад
        </button>
      </div>
    </section>
  );
};

export default NotFound;
