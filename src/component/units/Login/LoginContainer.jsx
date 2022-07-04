import { useRef, useState } from 'react';
import LoginUI from './LoginPresenter';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  checkEmail,
  checkPassword,
} from '../../commons/utils/loginValidation.js';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  let navigate = useNavigate();

  const onChangeEmail = (e) => {
    const emailInput = e.target.value;
    setEmailValid(checkEmail(emailInput));
  };

  const onChangePassword = (e) => {
    const passwordInput = e.target.value;
    setPasswordValid(checkPassword(passwordInput));
  };

  const LoginButton = () => {
    if (!passwordValid || !emailValid) {
      return alert('이메일과 비밀번호를 정확하게 입력해주세요');
    }
    if (passwordValid && emailValid) {
      localStorage.setItem('LoginUser', emailRef.current?.value);
      navigate('/main');
    }
  };

  return (
    <LoginUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      LoginButton={LoginButton}
      emailRef={emailRef}
      passwordRef={passwordRef}
      passwordValid={passwordValid}
      emailValid={emailValid}
    />
  );
}
