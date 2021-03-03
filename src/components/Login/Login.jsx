import React, { useRef } from 'react';
import AuthenticationSection from '../AuthenticationSection/AuthenticationSection';
import InputElement from '../InputElement/InputElement';
import { PATHNAME } from '../../utils/constants';

const { signup } = PATHNAME;

const Login = () => {
  const firstInputRef = useRef();

  const loginChildren = (
    <>
      <InputElement
        inputTitle="E-mail"
        type="email"
        name="emailInput"
        inputRef={firstInputRef}
      />
      <InputElement inputTitle="Пароль" type="password" name="passwordInput" />
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
    />
  );
};

export default Login;
