import React, { useRef } from 'react';
import AuthenticationSection from '../AuthenticationSection/AuthenticationSection';
import InputElement from '../InputElement/InputElement';
import { PATHNAME } from '../../utils/constants';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const { signup } = PATHNAME;

const Login = ({ onAuthorization }) => {
  const firstInputRef = useRef();
  const {
    values,
    errors,
    isValidForm,
    handleInputChange,
  } = useFormWithValidation();

  const handleAuthorization = async () => {
    await onAuthorization({
      email: values.email,
      password: values.password,
    });
  };

  const loginChildren = (
    <>
      <InputElement
        inputTitle="E-mail"
        type="email"
        name="email"
        inputRef={firstInputRef}
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
      title="Рады видеть!"
      children={loginChildren}
      textButton="Войти"
      question="Ещё не зарегистрированы?"
      pathname={signup}
      textLink="Регистрация"
      inputRef={firstInputRef}
      isValidForm={isValidForm}
      onSubmit={handleAuthorization}
    />
  );
};

export default Login;
