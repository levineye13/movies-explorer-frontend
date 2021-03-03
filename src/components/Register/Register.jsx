import React, { useRef } from 'react';
import AuthenticationSection from '../AuthenticationSection/AuthenticationSection';
import InputElement from '../InputElement/InputElement';
import { PATHNAME } from '../../utils/constants';

const { signin } = PATHNAME;

const Register = () => {
  const firstInputRef = useRef();

  const registerChildren = (
    <>
      <InputElement
        inputTitle="Имя"
        type="text"
        name="nameInput"
        inputRef={firstInputRef}
      />
      <InputElement inputTitle="E-mail" type="email" name="emailInput" />
      <InputElement inputTitle="Пароль" type="password" name="passwordInput" />
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
    />
  );
};

export default Register;
