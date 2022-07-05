import React from 'react';
import { useNavigate } from 'react-router-dom';
import SubHeaderUI from './SubHeaderPresenter';

export default function SubHeader() {
  let navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem('LoginUser');
    navigate('/');
  };
  return <SubHeaderUI Logout={Logout} />;
}
