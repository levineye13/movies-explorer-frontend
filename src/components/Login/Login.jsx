import React, { useRef } from 'react';
import AuthenticationSection from '../AuthenticationSection/AuthenticationSection';
import InputElement from '../InputElement/InputElement';
import { PATHNAME } from '../../utils/constants';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const { signup } = PATHNAME;

const Login = () => {
  const firstInputRef = useRef();
  const {
    values,
    errors,
    isValidForm,
    handleInputChange,
  } = useFormWithValidation();

  const loginChildren = (
    <>
      <InputElement
        inputTitle="E-mail"
        type="email"
        name="emailInput"
        inputRef={firstInputRef}
        value={values.emailInput}
        error={errors.emailInput}
        onChange={handleInputChange}
      />
      <InputElement
        inputTitle="Пароль"
        type="password"
        name="passwordInput"
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
    />
  );
};

export default Login;
