import React from 'react';
import './Profile.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const Profile = () => {
  const { values, isValidForm, handleInputChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
  };

  return (
    <section className="profile page__profile">
      <h1 className="profile__title">Привет, Олег!</h1>
      <form
        action="#"
        className="profile__form"
        name="profileForm"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="profile__user-info">
          <label className="profile__field">
            Имя
            <input
              type="text"
              className="profile__input"
              name="nameInput"
              required
              onChange={handleInputChange}
              value={values.nameInput || ''}
            />
          </label>
          <label className="profile__field">
            Почта
            <input
              type="email"
              className="profile__input"
              name="emailInput"
              required
              onChange={handleInputChange}
              value={values.emailInput || ''}
            />
          </label>
        </fieldset>
        <button className="profile__edit" type="submit" disabled={!isValidForm}>
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
