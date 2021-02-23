import React from 'react';
import { useHistory } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  const { goBack } = useHistory();

  return (
    <section className="not-found">
      <h2 className="not-found__title">404</h2>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button type="button" className="not-found__back" onClick={goBack}>
        Назад
      </button>
    </section>
  );
};

export default NotFound;
