import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <section className="profile">
      <h1 className="profile__title">Привет, Олег!</h1>
      <form action="#" className="profile__form" name="profileForm" noValidate>
        <fieldset className="profile__user-info">
          <label className="profile__field">
            Имя
            <input
              type="text"
              className="profile__input"
              name="nameInput"
              required
            />
          </label>
          <label className="profile__field">
            Почта
            <input
              type="email"
              className="profile__input"
              name="emailInput"
              required
            />
          </label>
        </fieldset>
        <button className="profile__edit" type="submit">
          Редактировать
        </button>
        <button className="profile__logout" type="submit">
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export default Profile;
