import React from 'react';
import './Profile.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { patternName } from '../../utils/constants';

const Profile = ({ onUpdateUser }) => {
  const { values, isValidForm, handleInputChange } = useFormWithValidation();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    await onUpdateUser({
      name: values.name,
      email: values.email,
    });
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
              name="name"
              required
              onChange={handleInputChange}
              value={values.name || ''}
              pattern={patternName}
            />
          </label>
          <label className="profile__field">
            Почта
            <input
              type="email"
              className="profile__input"
              name="email"
              required
              onChange={handleInputChange}
              value={values.email || ''}
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
