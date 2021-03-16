import React, { useState, useContext, useEffect } from 'react';
import './Profile.css';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';
import { patternName } from '../../utils/constants';
import { UserContext } from '../../contexts/UserContext';

const Profile = ({ onUpdateUser, onUnauthorization, networkError }) => {
  const {
    values,
    isValidForm,
    handleInputChange,
    resetForm,
  } = useFormWithValidation();
  const currentUser = useContext(UserContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsDisabled(true);

    await onUpdateUser({
      name: values.name,
      email: values.email,
    });

    setIsDisabled(false);
  };

  const checkEqualInput = () =>
    currentUser.name !== values.name || currentUser.email !== values.email;

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser, {}, true);
    }
  }, []);

  return (
    <section className="profile page__profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form
        action="#"
        className="profile__form"
        name="profileForm"
        noValidate
        onSubmit={handleSubmit}
      >
        <fieldset className="profile__user-info" disabled={isDisabled}>
          <label className="profile__field">
            Имя
            <input
              type="text"
              className="profile__input"
              name="name"
              required
              onChange={(evt) => {
                handleInputChange(evt);
                checkEqualInput();
              }}
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
              onChange={(evt) => {
                handleInputChange(evt);
                checkEqualInput();
              }}
              value={values.email || ''}
            />
          </label>
        </fieldset>
        <span className="profile__request-error">{networkError}</span>
        <button
          className="profile__edit"
          type="submit"
          disabled={!isValidForm || !checkEqualInput() || isDisabled}
        >
          Редактировать
        </button>
        <button
          className="profile__logout"
          type="button"
          onClick={onUnauthorization}
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export default Profile;
