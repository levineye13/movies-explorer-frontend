import React, { useRef } from 'react';
import AuthenticationSection from '../AuthenticationSection/AuthenticationSection';
import InputElement from '../InputElement/InputElement';
import { PATHNAME } from '../../utils/constants';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const { signin } = PATHNAME;

const Register = ({ onRegistration }) => {
  const firstInputRef = useRef();
  const {
    values,
    errors,
    isValidForm,
    handleInputChange,
  } = useFormWithValidation();

  const handleRegistration = async () => {
    await onRegistration({
      name: values.name,
      email: values.email,
      password: values.password,
    });
  };

  const registerChildren = (
    <>
      <InputElement
        inputTitle="Имя"
        type="text"
        name="name"
        inputRef={firstInputRef}
        value={values.nameInput}
        error={errors.nameInput}
        onChange={handleInputChange}
      />
      <InputElement
        inputTitle="E-mail"
        type="email"
        name="email"
        value={values.emailInput}
        error={errors.emailInput}
        onChange={handleInputChange}
      />
      <InputElement
        inputTitle="Пароль"
        type="password"
        name="password"
        value={values.passwordInput}
        error={errors.passwordInput}
        onChange={handleInputChange}
      />
    </>
  );

  return (
    <AuthenticationSection
      title="Добро пожаловать!"
      children={registerChildren}
      textButton="Зарегистрироваться"
      question="Уже зарегистрированы?"
      pathname={signin}
      textLink="Войти"
      inputRef={firstInputRef}
      isValidForm={isValidForm}
      onSubmit={handleRegistration}
    />
  );
};

export default Register;
