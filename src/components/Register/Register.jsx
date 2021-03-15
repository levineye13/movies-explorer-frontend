import React, { useRef } from 'react';
import AuthenticationSection from '../AuthenticationSection/AuthenticationSection';
import InputElement from '../InputElement/InputElement';
import { PATHNAME, patternName } from '../../utils/constants';
import { useFormWithValidation } from '../../hooks/useFormWithValidation';

const { signin } = PATHNAME;

const Register = ({ onRegistration, networkError }) => {
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
        value={values.name}
        error={errors.name}
        onChange={handleInputChange}
        pattern={patternName}
      />
      <InputElement
        inputTitle="E-mail"
        type="email"
        name="email"
        value={values.email}
        error={errors.email}
        onChange={handleInputChange}
      />
      <InputElement
        inputTitle="Пароль"
        type="password"
        name="password"
        value={values.password}
        error={errors.password}
        onChange={handleInputChange}
        minLength="8"
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
      textError={networkError}
      inputRef={firstInputRef}
      isValidForm={isValidForm}
      onSubmit={handleRegistration}
    />
  );
};

export default Register;
