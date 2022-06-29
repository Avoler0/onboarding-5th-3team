import { useRef, useState } from 'react';
import LoginUI from './LoginPresenter';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [test, setTest] = useState(false);
  let navigate = useNavigate();

  const onChangeEmail = (e) => {
    const EmailRex = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (EmailRex.test(e.target.value) === false) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
  const onChangePassword = (e) => {
    const PasswordRex =
      /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/;
    if (PasswordRex.test(e.target.value) === false) {
      setTest(false);
    } else {
      setTest(true);
    }
  };

  const LoginButton = () => {
    if (!test || !isActive) {
      return alert('이메일과 비밀번호를 정확하게 입력해주세요');
    }
    if (test === true && isActive === true) {
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
      test={test}
      isActive={isActive}
    />
  );
}
